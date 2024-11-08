// import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
// import Fabs from "../components/common/Fabs";
// import Footer from "../components/common/Footer";
// import Header from "../components/common/Header";
import { CssBaseline } from "@mui/material";
import { Helmet } from "react-helmet";
import useRootLanguage from "../../../hooks/useRootLanguage";
import Fabs from "../components/common/Fabs";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { rootLangIdSetted } from "./rootSlice";
interface IRootProps {
  langId: number;
}
const Root = ({ langId }: IRootProps) => {
  const dispatch = useAppDispatch();
  const rootLang = useRootLanguage();

  useEffect(() => {
    localStorage.setItem("rootLangId", langId.toString());
    dispatch(rootLangIdSetted(langId));
  }, [langId]);

  return (
    <div className="ags-layout">
      {rootLang && (
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context":"https://schema.org",
                "@type":"Organization",
                "name":"${rootLang.CompanyName}",
                "url":"${window.location.href}",
                "description":"AGS đã không ngừng lớn mạnh và liên tục phát triển, tập trung nâng cao chất lượng dịch vụ và năng lực phục vụ, là lựa chọn của nhiều hãng hàng không: Vietnam Airlines, China Southern Airlines, Azur Air, Bangkok Airways, Jeju Air, Pacific Airlines, Air Seoul, HK Express, Okay Airways, Qingdao Airlines, Starlux Airlines, China Airlines, Eznis Airways,…",
                "image":"${window.location.origin}/${rootLang.MetaLogo}",
                "address":"Cam Ranh International Airport",
                "logo":"${window.location.origin}/${rootLang.MetaLogo}",
                "email":"business@ags.com.vn",
                "telephone":"+84 258 3971 888"
              }
          `}
          </script>
        </Helmet>
      )}
      <div className="outlet-wrapper" style={{ position: "relative" }}>
        <CssBaseline />
        <Fabs />
        <Header />
        <ScrollRestoration
          getKey={(location, matches) => {
            const paths = ["/home", "/contact, /vn/contact/ "];
            return paths.includes(location.pathname)
              ? // home and notifications restore by pathname
                location.pathname
              : // everything else by location like the browser
                location.key;
          }}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
