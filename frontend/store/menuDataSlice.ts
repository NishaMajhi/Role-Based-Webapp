import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuDataState {
    data: string[];  // This will hold the 'data' array from each menu item
}

const initialState: MenuDataState = {
    data: [],
};

const menuDataSlice = createSlice({
    name: "menuData",
    initialState,
    reducers: {
        setMenuData: (state, action: PayloadAction<string[]>) => {
            state.data = action.payload;
        },
    },
});

export const { setMenuData } = menuDataSlice.actions;
export default menuDataSlice.reducer;
