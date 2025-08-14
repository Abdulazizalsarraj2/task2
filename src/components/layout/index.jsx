import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navigation";
import Footer from "../footer/Footer";

import { useLocation } from "react-router-dom";
const Layout = () => {

  const location = useLocation();

  const hideLayoutRoutes = ["/register", "/login"];

  
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
      <>
      <div className='w-full overflow-hidden'>
          
        {!shouldHideLayout && <Navbar />}
        
    {/* <Suspense fallback={<div>loading...</div>}> */}
      <Outlet />
          {/* </Suspense> */}
          {!shouldHideLayout && <Footer />}
              </div>
    </>
  );
};

export default Layout;
