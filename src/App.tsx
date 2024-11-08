import "bootstrap/dist/js/bootstrap.bundle";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";

import Error from "./components/appPages/pages/Error";
import Root from "./components/appPages/pages/root";
import RootLayoutProvider from "./context/RootLayoutProvider";
import { ENRoutes, VNRoutes } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route errorElement={<Error />} />,

    <Route
      index
      element={
        <Navigate
          to={Number(localStorage.getItem("rootLangId")) === 1 ? "/vn" : "/en"}
        />
      }
    />,
    <Route element={<RootLayoutProvider />}>
      <Route path="/vn" element={<Root langId={1} />}>
        {VNRoutes.map(({ path, component: Component }, idx) => {
          if (path === "/vn/news/public" || path === "/vn/news/internal") {
            return <Route key={idx} path={path} element={<Component />} />;
          }
          return (
            <Route key={idx} path={path} element={<Component key={path} />} />
          );
        })}
      </Route>
      <Route path="/en" element={<Root langId={2} />}>
        {ENRoutes.map(({ path, component: Component }, idx) => {
          if (path === "/en/news/public" || path === "/en/news/internal") {
            return <Route key={idx} path={path} element={<Component />} />;
          }
          return (
            <Route key={idx} path={path} element={<Component key={path} />} />
          );
        })}
      </Route>
    </Route>,
  ])
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
