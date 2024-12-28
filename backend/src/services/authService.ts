import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined. Please set it in your environment variables.');
}

export const registerUser = async (email: string, password: string, roleId: number) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        return prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                roleId,
            },
        });
    } catch (error: any) {
        throw new Error(`User registration failed: ${error.message}`);
    }

};


export const loginUser = async (email: string, password: string) => {
    try {

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error('Invalid credentials.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials.');
        }

        const token = jwt.sign({ id: user.id, roleId: user.roleId }, JWT_SECRET, {
            expiresIn: '20d',
        });

        return token;
    } catch (error: any) {
        throw new Error(`Login failed: ${error.message}`);
    }
};
