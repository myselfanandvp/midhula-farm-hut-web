import { Routes, Route } from "react-router";
import type { JSX } from "react";
import { HomePage } from "./features/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ui/ScrollProgressBar";
import NoiseOverlay from "./components/ui/NoiseOverlay";

function App(): JSX.Element {
  return (
    <>
      <ScrollProgressBar />
      <NoiseOverlay />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
