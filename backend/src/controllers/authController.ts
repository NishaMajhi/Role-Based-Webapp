import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, roleId } = req.body;

        if (!email || !password || !roleId) {
            res.status(400).json({ error: 'All fields are required (email, password, roleId).' });
            return;
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            res.status(409).json({ error: 'Email already exists.' });
            return;
        }

        const user = await registerUser(email, password, roleId);

        res.status(201).json({ message: 'User registered successfully.' });

    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'Email and password are required.' });
            return;
        }

        const token = await loginUser(email, password);

        res.status(200).json({ message: 'Login successful.', token });

    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
