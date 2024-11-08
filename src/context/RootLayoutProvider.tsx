import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { rootLangIdSelector } from "../components/appPages/pages/rootSlice";
import { IRootLangOnPages, rootPresetLanguage } from "../helpers/utils";
import { useAppSelector } from "../hooks";
import { RootLayoutContext } from "../hooks/useRootLanguage";

const useRootPageLanguage = () => {
  const currentLangId = useAppSelector(rootLangIdSelector);
  const [rootPageLang, setRootPageLang] = useState<IRootLangOnPages>();
  const [services, setServices] = useState<[]>([]);

  useEffect(() => {
    setRootPageLang(rootPresetLanguage[currentLangId]);
    //console.log("Root Page Lang: " + rootPageLang);
    // console.log("Cur lang id: " + currentLangId);
  }, [currentLangId]);

  useEffect(() => {
    const serviceSubmenu: {
      title: string;
      url: string;
    }[] = services.map((item) => {
      return {
        title: item.Ten,
        url: `${rootPageLang?.HeaderNavBar[2].url}/${item.Url}`,
      };
    });
    const newHeaderNavBar = rootPageLang?.HeaderNavBar.map((item, idx) => {
      if (idx !== 2) {
        return item;
      }
      return {
        ...item,
        submenu: serviceSubmenu,
      };
    });
    if (newHeaderNavBar) {
      // console.log("NewHeaderNavBar: " + JSON.stringify(newHeaderNavBar));
      setRootPageLang((prev) => ({
        ...prev,
        HeaderNavBar: newHeaderNavBar,
      }));
    }
  }, [services]);

  useEffect(() => {
    // console.log("RootPageLang: " + JSON.stringify(rootPageLang));
  }, [rootPageLang]);

  return rootPageLang;
};

const RootLayoutProvider = () => {
  const rootPageLang = useRootPageLanguage();
  return (
    <RootLayoutContext.Provider value={rootPageLang || rootPresetLanguage[2]}>
      <Outlet />
    </RootLayoutContext.Provider>
  );
};

export default RootLayoutProvider;
