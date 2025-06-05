import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import { useState } from "react";
import CreateContentModel from "../components/CreateContentModel";

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <CreateContentModel isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpen={setIsOpen} />
      <Outlet />
    </>
  );
}
