import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";
// import { AppRoutes } from "../../../routes";

interface Layout {
  isToggleLeftMenu: boolean;
  isFixNavbar: boolean;
  isDarkHeader: boolean;
  headerTitle: string;
  langId: number;
}

export type LayoutState = Layout;
const initialState = () => {
  const initialValue: LayoutState = {
    isToggleLeftMenu: false,
    isFixNavbar: false,
    isDarkHeader: false,
    headerTitle: "Page Title",
    langId: parseInt(localStorage.getItem("langId") || "1"),
  };
  return initialValue;
};

export const headerTitleSelector = (state: RootState) =>
  state.layout.headerTitle;
export const isFixNavbarSelector = (state: RootState) =>
  state.layout.headerTitle;
export const isDarkHeaderSelector = (state: RootState) =>
  state.layout.isDarkHeader;
export const langIdSelector = (state: RootState) => state.layout.langId;

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    leftMenuToggled(state) {
      state.isToggleLeftMenu = !state.isToggleLeftMenu;
    },
    navbarFixed(state) {
      state.isFixNavbar = !state.isFixNavbar;
    },
    headerDarked(state) {
      state.isDarkHeader = !state.isDarkHeader;
    },
    headerTitleSetted(state, action: PayloadAction<string>) {
      const locPathArr = action.payload.split("/");
      let headerTitle = "Page Title";
      // AppRoutes.every((val) => {
      //   const pathArr = val.path.split("/");
      //   const asteriskCount = pathArr.filter((i) => i === "*").length;
      //   let matchCount = 0;
      //   pathArr.forEach((i, idx) => {
      //     if (i !== "*" && locPathArr[idx] === i) {
      //       matchCount++;
      //     }
      //   });
      //   if (pathArr.length - asteriskCount === matchCount) {
      //     headerTitle = val.pageTitle[state.langId - 1];
      //     return false;
      //   }
      //   return true;
      // });
      state.headerTitle = headerTitle;
    },
    langIdSetted(state, action: PayloadAction<number>) {
      state.langId = action.payload;
    },
  },
});

export const { leftMenuToggled, headerTitleSetted, langIdSetted } =
  layoutSlice.actions;

export default layoutSlice;
