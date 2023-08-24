import { Outlet } from "react-router-dom";
import Loader from "../../molecule/Loader";

import "../../../assets/css/App.css";

const AuthLayout = () => {
  return (
    <>
      <Loader />
      <div>
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
