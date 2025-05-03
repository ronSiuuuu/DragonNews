import React from "react";

import Latest from "./Latest";
import Navbar from "./Navbar";
import Header from "./Header";
import LeftLayout from "./LeftLayout";
import { Outlet } from "react-router";
import RightLayout from "./RightLayout";



const HomeLayout = () => {


  return (
    <>
      <header className="w-11/12 mx-auto">
        <Header></Header>

        <Latest></Latest>
      </header>

      <Navbar></Navbar>

      <main className="grid grid-cols-12 w-11/12 mx-auto gap-5">
    <div className="col-span-3 sticky top-0 h-fit">< LeftLayout></LeftLayout></div>
    <div className="col-span-6">
  <Outlet></Outlet>
     
      
    </div>
    <div className="col-span-3 sticky top-0 h-fit">
      <RightLayout></RightLayout>
    </div>
      </main>
    </>
  );
};

export default HomeLayout;
