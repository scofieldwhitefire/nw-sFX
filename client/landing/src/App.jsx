import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import "./assets/css/App.css";
import HomeLayout from "./components/templates/layouts/HomeLayout";
import Preloader from "./components/molecules/Preloader";

const Home = lazy(() => import("./pages/Home"));
const Loan = lazy(() => import("./pages/services/Loan"));
const Investment = lazy(() => import("./pages/services/Investment"));
const Trading = lazy(() => import("./pages/services/Trading"));
const Mining = lazy(() => import("./pages/services/Mining"));
const Jackpot = lazy(() => import("./pages/services/Jackpot"));
const FAQs = lazy(() => import("./pages/FAQs"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Calculator = lazy(() => import("./pages/Calculator"));

function App() {
  return (
    <>
      <Routes>
        {/* Index Page */}
        <Route path="/" element={<HomeLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Preloader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/loan"
            element={
              <Suspense fallback={<Preloader />}>
                <Loan />
              </Suspense>
            }
          />
          <Route
            path="/investment"
            element={
              <Suspense fallback={<Preloader />}>
                <Investment />
              </Suspense>
            }
          />
          <Route
            path="/trading"
            element={
              <Suspense fallback={<Preloader />}>
                <Trading />
              </Suspense>
            }
          />
          <Route
            path="/mining"
            element={
              <Suspense fallback={<Preloader />}>
                <Mining />
              </Suspense>
            }
          />
          <Route
            path="/jackpot"
            element={
              <Suspense fallback={<Preloader />}>
                <Jackpot />
              </Suspense>
            }
          />
          <Route
            path="/faqs"
            element={
              <Suspense fallback={<Preloader />}>
                <FAQs />
              </Suspense>
            }
          />
          <Route
            path="/faqs/:id"
            element={
              <Suspense fallback={<Preloader />}>
                <FAQs />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Preloader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact-us"
            element={
              <Suspense fallback={<Preloader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/calculator"
            element={
              <Suspense fallback={<Preloader />}>
                <Calculator />
              </Suspense>
            }
          />
          {/* <Route
            path="/tracking"
            element={
              <Suspense fallback={<Preloader />}>
                <Tracking />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<Preloader />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<Preloader />}>
                <BlogDetails />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Preloader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<Preloader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<Preloader />}>
                <Services />
              </Suspense>
            }
          /> */}
          {/* <Route
            path="about"
            element={
              <Suspense fallback={<Preloader />}>
                <About />
              </Suspense>
            }
          />  */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
