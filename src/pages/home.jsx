import React from "react";
import { About, Cards, Eye, Footer, Landing, Marquee } from "../components";
import Featured from "../components/home/featured";

const Home = () => {
  return <div className="w-full min-h-screen bg-zinc-900 pt-1">
    <Landing/>
    <Marquee/>
    <About/>
    <Eye/>
    <Featured/>
    <Cards/>
    <Footer/>
  </div>;
};

export default Home;
