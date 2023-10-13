import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Scill from "./components/Scill";
import Contact from "./components/Contact";
import Work from "./components/Work";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Banner />
      <Nav />
      <About />
      <Scill />
      <Services />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
