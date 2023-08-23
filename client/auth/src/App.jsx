import { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import AuthLayout from "./components/templates/layouts/AuthLayout";
import Loader from "./components/molecule/Loader";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ResetPwd = lazy(() => import("./pages/ResetPwd"));

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
        </Route>
      </Routes>
    </>
  );
}

export default App;
