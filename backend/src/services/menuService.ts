import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMenusByRole = async (roleId: number) => {
    try {
        return await prisma.menu.findMany({ where: { roleId } });
    } catch (error: any) {
        throw new Error(`Failed to fetch menus for roleId ${roleId}: ${error.message}`);
    }
};

export const getConfigurationByRole = async (roleId: number) => {
    try {
        return await prisma.role.findUnique({
            where: {
                id: roleId
            },
            select: {
                name: true
            }
        });
    } catch (error: any) {
        throw new Error(`Failed to fetch role for roleId ${roleId}: ${error.message}`);
    }
};
