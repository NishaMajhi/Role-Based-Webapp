import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import menuReducer from "./menuSlice";  // Import the new menu reducer
import menuDataReducer from "./menuDataSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        menu: menuReducer, // Add the menu reducer here
        menuData: menuDataReducer,
    },
});

// Correctly type RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
