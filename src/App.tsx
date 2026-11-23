import { Routes, Route } from "react-router";
import type { JSX } from "react";
import { HomePage } from "./features/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App(): JSX.Element {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
