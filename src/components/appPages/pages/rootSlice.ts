import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface IRootLayoutState {
  langId: number;
  isHeaderVisible: boolean;
  isHeaderVisibleAtService: boolean;
  heroHeightDimension: number;
  serviceHeadingOnHero: string;
}

const initialState = () => {
  const initialValue: IRootLayoutState = {
    langId: Number(localStorage.getItem("rootLangId")),
    // langId: 2,
    isHeaderVisible: false,
    isHeaderVisibleAtService: false,
    heroHeightDimension: 0,
    serviceHeadingOnHero: "",
  };

  return initialValue;
};

export const rootLangIdSelector = (state: RootState) => state.rootLayout.langId;
export const isHeaderVisibleSelector = (state: RootState) =>
  state.rootLayout.isHeaderVisible;
export const isHeaderVisibleAtServiceSelector = (state: RootState) =>
  state.rootLayout.isHeaderVisibleAtService;
export const heroHeightDimensionSelector = (state: RootState) =>
  state.rootLayout.heroHeightDimension;
export const serviceHeadingOnHeroSelector = (state: RootState) =>
  state.rootLayout.serviceHeadingOnHero;

const rootLayoutSlice = createSlice({
  name: "rootLayout",
  initialState,
  reducers: {
    rootLangIdSetted(state, action: PayloadAction<number>) {
      state.langId = action.payload;
    },
    isHeaderVisibleSetted(state, action: PayloadAction<boolean>) {
      state.isHeaderVisible = action.payload;
    },
    isHeaderVisibleAtServiceSetted(state, action: PayloadAction<boolean>) {
      state.isHeaderVisibleAtService = action.payload;
    },
    heroHeightDimensionSetted(state, action: PayloadAction<number>) {
      state.heroHeightDimension = action.payload;
    },
    serviceHeadingOnHeroSetted(state, action: PayloadAction<string>) {
      state.serviceHeadingOnHero = action.payload;
    },
  },
});

export const {
  rootLangIdSetted,
  isHeaderVisibleSetted,
  isHeaderVisibleAtServiceSetted,
  heroHeightDimensionSetted,
  serviceHeadingOnHeroSetted,
} = rootLayoutSlice.actions;

export default rootLayoutSlice;
