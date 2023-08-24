import { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import DashboardLayout from "./components/templates/layouts/DashboardLayout";
import Loader from "./components/molecule/Loader";

const Index = lazy(() => import("./pages"));
const Withdraw = lazy(() => import("./pages/Withdraw"));
const Invest = lazy(() => import("./pages/Invest"));

function App() {
  return (
    <>
      <Routes>
        {/* Index Page */}
        <Route path="/" element={<DashboardLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Index />
              </Suspense>
            }
          />
          <Route
            path="/invest"
            element={
              <Suspense fallback={<Loader />}>
                <Invest />
              </Suspense>
            }
          />
          <Route
            path="/withdraw"
            element={
              <Suspense fallback={<Loader />}>
                <Withdraw />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
