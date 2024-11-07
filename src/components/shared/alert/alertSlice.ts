import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

interface AlertProps {
  isShowToast: boolean;
  toastContent: string;

  isShowConfirmDialog: boolean;
  confirmDialogTitle: string;
  confirmDialogContent: string;
  denyButtonText: string;
  acceptButtonText: string;

  isShowWarningDialog: boolean;
  warningDialogContent: string;
}

export type AlertPropsState = AlertProps;
const initialState: AlertPropsState = {
  isShowToast: false,
  toastContent: "Null",

  isShowConfirmDialog: false,
  confirmDialogTitle: "Null",
  confirmDialogContent: "Null",
  denyButtonText: "Null",
  acceptButtonText: "Null",

  isShowWarningDialog: false,
  warningDialogContent: "Null",
};

export const isShowToastSelector = (state: RootState) =>
  state.alert.isShowToast;
export const toastContentSelector = (state: RootState) =>
  state.alert.toastContent;

export const isShowConfirmDialogSelector = (state: RootState) =>
  state.alert.isShowConfirmDialog;
export const confirmDialogTitleSelector = (state: RootState) =>
  state.alert.confirmDialogTitle;
export const confirmDialogContentSelector = (state: RootState) =>
  state.alert.confirmDialogContent;
export const denyButtonTextSelector = (state: RootState) =>
  state.alert.denyButtonText;
export const acceptButtonTextSelector = (state: RootState) =>
  state.alert.acceptButtonText;

export const isShowWarningDialogSelector = (state: RootState) =>
  state.alert.isShowWarningDialog;
export const warningDialogContentSelector = (state: RootState) =>
  state.alert.warningDialogContent;

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    onToastContentSetted(state, action: PayloadAction<string>) {
      state.toastContent = action.payload;
    },
    onToastClosed(state) {
      state.isShowToast = false;
    },
    onToastOpened(state) {
      state.isShowToast = true;
    },

    onConfirmDialogClosed(state) {
      state.isShowConfirmDialog = false;
    },
    onConfirmDialogOpened(state) {
      state.isShowConfirmDialog = true;
    },
    onConfirmDialogTitleSetted(state, action: PayloadAction<string>) {
      state.confirmDialogTitle = action.payload;
    },
    onConfirmDialogContentSetted(state, action: PayloadAction<string>) {
      state.confirmDialogContent = action.payload;
    },
    onDenyButtonTextSetted(state, action: PayloadAction<string>) {
      state.denyButtonText = action.payload;
    },
    onAcceptButtonTextSetted(state, action: PayloadAction<string>) {
      state.acceptButtonText = action.payload;
    },

    onWarningDialogClosed(state) {
      state.isShowWarningDialog = false;
    },
    onWarningDialogOpened(state) {
      state.isShowWarningDialog = true;
    },
    onWarningDialogContentSetted(state, action: PayloadAction<string>) {
      state.warningDialogContent = action.payload;
    },
  },
});

export const {
  onToastContentSetted,
  onToastClosed,
  onToastOpened,

  onConfirmDialogClosed,
  onConfirmDialogOpened,
  onConfirmDialogTitleSetted,
  onConfirmDialogContentSetted,
  onDenyButtonTextSetted,
  onAcceptButtonTextSetted,

  onWarningDialogClosed,
  onWarningDialogOpened,
  onWarningDialogContentSetted,
} = alertSlice.actions;
export default alertSlice;
