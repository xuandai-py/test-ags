import CssBaseline from "@mui/material/CssBaseline";

import { Button, Stack, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";
import Fabs from "../components/common/Fabs";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export default function Error() {
  const error = useRouteError();
  // const mbNavWrapper =
  //   document.getElementsByClassName("mobile-nav-wrapper")[0].offsetHeight;
  // const dtDownHeader = document.getElementsByClassName("desktop-down-header")[0]
  //   .offsetHeight;

  return (
    <div className="ags-layout">
      <div className="outlet-wrapper" style={{ position: "relative" }}>
        <div className="">header</div>

        <div className="">content</div>

        <div className="">footer</div>
      </div>
    </div>
  );
}
