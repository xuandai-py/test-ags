import { configureStore } from "@reduxjs/toolkit";
import alertSlice from "./components/shared/alert/alertSlice";
import layoutSlice from "./components/shared/layout/layoutSlice";
import menuItemSlice from "./components/shared/sidebarMenu/menuItemSlice";
import sidebarSlice from "./components/shared/sidebarMenu/sidebarSlice";
import rootLayoutSlice from "./components/appPages/pages/rootSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    layout: layoutSlice.reducer,
    alert: alertSlice.reducer,
    menuItem: menuItemSlice.reducer,
    rootLayout: rootLayoutSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
