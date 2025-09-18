"use client";
import React, { useEffect, useState } from "react";
import SideNavSection from "./components/sideNavSection";
import MainNavSection from "./components/mainNavSection";
const Navigation = () => {
  const [showSideBar, setShowsideBar] = useState<boolean>(false);

  useEffect(() => {
    if (showSideBar) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [showSideBar]);
  return (
    <>
      <MainNavSection setShowSideBar={setShowsideBar} />
      <SideNavSection
        setShowSideBar={setShowsideBar}
        showSideBar={showSideBar}
      />
    </>
  );
};

export default Navigation;
