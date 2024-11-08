import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export type GlobalUserInfo = {
  user: string;
  maDonVi: string;
  displayName: string;
  accessToken: string;
  permissions: string[];
  isAdmin: boolean;
};
interface AppUser {
  auth: GlobalUserInfo;
  setAuth: (i: GlobalUserInfo) => void;
  persist: any;
  setPersist: (i: any) => void;
}
const AuthContext = createContext<AppUser>({
  auth: {
    user: "",
    maDonVi: "",
    displayName: "",
    accessToken: "",
    permissions: [],
    isAdmin: false,
  },
  setAuth: (i: GlobalUserInfo) => {},
  persist: "",
  setPersist: () => {},
});
export const AuthProvider = () => {
  const [auth, setAuth] = useState<GlobalUserInfo>({
    user: "",
    maDonVi: "",
    displayName: "",
    accessToken: "",
    permissions: [],
    isAdmin: false,
  });
  const [persist, setPersist] = useState(
    JSON.parse(localStorage.getItem("persist")!) || false
  );
  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default AuthContext;
