import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "./components/HomeHeader";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <Outlet></Outlet>
    </>
  );
}
