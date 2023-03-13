import React, { Suspense} from "react";
import { Outlet } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Navigation from "components/Navigation/Navigation";
import Footer from "components/Footer/Footer";
import { Header, Wrapper } from "./SharedLayout.styled";
const SharedLayout:React.FC = () => {
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