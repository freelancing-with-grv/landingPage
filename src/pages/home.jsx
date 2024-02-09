import React from "react";
import { About, Eye, Landing, Marquee } from "../components";

const Home = () => {
  return <div className="w-full min-h-screen bg-zinc-900 pt-1">
    <Landing/>
    <Marquee/>
    <About/>
    <Eye/>
  </div>;
};

export default Home;
