import { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/templates/layouts/AuthLayout";
import Loader from "./components/molecule/Loader";

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
