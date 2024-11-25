import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "./components/Header";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader></HomeHeader>
      <Outlet></Outlet>
    </>
  );
}
