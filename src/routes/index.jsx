// import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
// import PageNotFound from "../pages/page-not-found";
import PathConstants from "./pathConstants";
// import PrivateRoutesComponent from "./PrivateRoutesComponent";
// import PrivateRoutes from "./PrivateRoutes";

import Home from "../pages/Home";
import Service_request from "../pages/Service_request/index";
import Team from "../pages/Team/index"
import Register from "../pages/auth/Register/index"
import Login from "../pages/auth/Login/index"
import Academy from "../pages/Academy/index"
import PlaylistDetails from "../pages/PlaylistDetails/index";

// const Home = lazy(() => import("../pages/home"));

const router = createBrowserRouter([
    {
        element: <Layout />,
        // errorElement: <PageNotFound />,
        children: [
          // هذا المسار يفتح Home لما تكون على "/"
          {
            path: "/",
            element: <Home />,
          },
          // هذا المسار يفتح Home لما تكون على "/home"
          {
            path: PathConstants.Home, // "/home"
            element: <Home />,
          },
    
          // مثال لمسار ثاني
          {
            path: PathConstants.Service_request,
            element: <Service_request />, // استبدلها بالمكون الصحيح عندك
          },
          {
            path: PathConstants.Team,
            element: <Team />, // استبدلها بالمكون الصحيح عندك
          },
          {
            path: PathConstants.Register,
            element: <Register />, // استبدلها بالمكون الصحيح عندك
          },
          {
            path: PathConstants.Login,
            element: <Login />, // استبدلها بالمكون الصحيح عندك
          },
          {
            path: PathConstants.Academy,
            element: <Academy />, // استبدلها بالمكون الصحيح عندك
          },
          {
            path: PathConstants.PlaylistDetails, // المسار الجديد
            element: <PlaylistDetails />,
        },
    ]

}]);

export default router;
