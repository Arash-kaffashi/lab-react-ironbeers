import React from "react";
import { Outlet } from "react-router-dom";
import Cheader from "../components/Header";

type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <Cheader />
      <Outlet />
    </>
  );
}
