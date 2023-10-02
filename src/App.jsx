import React, { useState, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./Components/Loader";

const Home = React.lazy(() => import("./Components/Home"));
const Home2 = React.lazy(() => import("./Components/Home2"));
const About = React.lazy(() => import("./Components/About"));
const Gallery = React.lazy(() => import("./Components/Gallery"));
const Services = React.lazy(() => import("./Components/Services"));
const Special = React.lazy(() => import("./Components/Special"));
const Contact = React.lazy(() => import("./Components/Contact"));

function App() {
  const [vidplaying, setVidPlaying] = useState(true);

  const stopVideo = () => {
    setVidPlaying(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              {vidplaying ? <Home stop={stopVideo} /> : <Home2 />}
            </Suspense>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          exact
          path="/gallery"
          element={
            <Suspense fallback={<Loader />}>
              <Gallery />
            </Suspense>
          }
        />
        <Route
          exact
          path="/services"
          element={
            <Suspense fallback={<Loader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          exact
          path="/special-offers"
          element={
            <Suspense fallback={<Loader />}>
              <Special />
            </Suspense>
          }
        />
        <Route
          exact
          path="/Contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
