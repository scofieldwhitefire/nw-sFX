import { useState, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import DashboardLayout from "./components/templates/layouts/DashboardLayout";
import Loader from "./components/molecule/Loader";

const Index = lazy(() => import("./pages"));
const Withdraw = lazy(() => import("./pages/Withdraw"));
const Invest = lazy(() => import("./pages/Invest"));
const Deposit = lazy(() => import("./pages/Deposit"));
const Upgrade = lazy(() => import("./pages/Upgrade"));
const Ref = lazy(() => import("./pages/Ref"));
const Transactions = lazy(() => import("./pages/Transactions"));

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
          <Route
            path="/deposit"
            element={
              <Suspense fallback={<Loader />}>
                <Deposit />
              </Suspense>
            }
          />
          <Route
            path="/upgrade"
            element={
              <Suspense fallback={<Loader />}>
                <Upgrade />
              </Suspense>
            }
          />
          <Route
            path="/referrals"
            element={
              <Suspense fallback={<Loader />}>
                <Ref />
              </Suspense>
            }
          />
          <Route
            path="/transactions"
            element={
              <Suspense fallback={<Loader />}>
                <Transactions />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
