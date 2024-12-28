import { Request, Response } from 'express';
import { getConfigurationByRole, getMenusByRole } from '../services/menuService';

export const getMenus = async (req: Request, res: Response) => {
    try {
        const roleId = req.user.roleId;
        const menus = await getMenusByRole(roleId);

        const formattedMenus = menus.map(menu => ({
            name: menu.name,
            path: menu.path || '',
            data: menu.data || []
        }));

        res.status(200).json(formattedMenus);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const getConfiguration = async (req: Request, res: Response) => {
    try {
        const roleId = req.user.roleId;
        const role = await getConfigurationByRole(roleId);
        let result = {}
        if (role) {
            result = {
                role: role.name,
                permission: role.name === "ADMIN" ? ["DELETE", "VIEW", "EDIT"] : ["VIEW"]
            }
        }
        res.status(200).json(result)
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}