import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { MenuCategory, MenuItemType } from "./SidebarMenu";
import { RootState } from "../../../store";

interface IMenuData {
  category: [];
  item: [];
  distribution: any[];
}

const initialState: IMenuData = {
  category: [],
  item: [],
  distribution: [],
};

export const getMenuCategorySelector = (state: RootState) =>
  state.menuItem.category;
export const getMenuItemSelector = (state: RootState) => state.menuItem.item;
export const getMenuDistributionSelector = (state: RootState) =>
  state.menuItem.distribution;

const menuItemSlice = createSlice({
  name: "menuItem",
  initialState,
  reducers: {
    onSetMenuDataState(state, action: PayloadAction<IMenuData>) {
      state.category = action.payload.category;
      state.item = action.payload.item;
      state.distribution = action.payload.distribution;
    },
  },
});

export const { onSetMenuDataState } = menuItemSlice.actions;
export default menuItemSlice;
