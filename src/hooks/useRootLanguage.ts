import { createContext, useContext } from "react";
import { IRootLangOnPages, rootPresetLanguage } from "../helpers/utils";

export const RootLayoutContext = createContext<IRootLangOnPages>(
  rootPresetLanguage[2]
);

const useRootLanguage = () => {
  return useContext(RootLayoutContext);
};

export default useRootLanguage;
