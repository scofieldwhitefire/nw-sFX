import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// ["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"]

import AuthLayout from "./components/templates/layouts/AuthLayout";
import Loader from "./components/molecule/Loader";

import EmailVerify from "./pages/EmailVerify";
import EmailVerifyPass from "./pages/EmailVerifyPass";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ResetPwd = lazy(() => import("./pages/ResetPwd"));
const Locked = lazy(() => import("./pages/Locked"));
const Confirmed = lazy(() => import("./pages/Confirmed"));

function App() {
  return (
    <>
      <Routes>
        {/* Index Page */}
        <Route path="/" element={<AuthLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Loader />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Suspense fallback={<Loader />}>
                <ResetPwd />
              </Suspense>
            }
          />
          <Route
            path="/lockscreen"
            element={
              <Suspense fallback={<Loader />}>
                <Locked />
              </Suspense>
            }
          />
          <Route
            path="/verify"
            element={
              <Suspense fallback={<Loader />}>
                <Confirmed />
              </Suspense>
            }
          />
          <Route
            path="/forgot-password/sent"
            element={
              <Suspense fallback={<Loader />}>
                <Confirmed />
              </Suspense>
            }
          />
          <Route
            path="/verify/:uuid/:token"
            element={
              <EmailVerify />
            }
          />
          <Route
            path="/verify/:uuid/:token/:status"
            element={
              <EmailVerifyPass />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
