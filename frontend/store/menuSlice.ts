import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuItem {
    name: string;
    path: string;
    data: string[];
}

interface MenuState {
    menuItems: MenuItem[];
}

const initialState: MenuState = {
    menuItems: [],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
            state.menuItems = action.payload;
        },
    },
});

export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
