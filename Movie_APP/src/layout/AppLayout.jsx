import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import { Loading } from "../components/UI/Loading";

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
