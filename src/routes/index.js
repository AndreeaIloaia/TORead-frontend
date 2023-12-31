import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"))

const routes = [
    { path: PathConstants.HOME, element: <Home />},
]

export default routes;