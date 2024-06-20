import { Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";
import Navigation from "../Navigation/Navigation";
import { navLinks } from "../../routes/routes";
import React from "react";

const Layout = () => {
  return (
    <div className="container text-center">
      <Header />

      <div className="row">
        <div className="col">
          <Navigation pages={navLinks} />
        </div>

        <div className="col-10">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </div>

    </div>
  );
};

export default Layout;
