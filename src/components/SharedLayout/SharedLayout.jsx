import React, { Suspense} from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Header, Wrapper } from "./SharedLayout.styled";
const SharedLayout = () => {
  return (
    <Wrapper>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </Wrapper>
  );
};

export default SharedLayout;