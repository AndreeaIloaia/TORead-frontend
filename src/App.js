import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PathConstants from './routes/pathConstants';
import Home from './pages/Home';
import Map from './pages/Map';
import Book from './pages/Book';
import Profile from './pages/Profile';
import AboutAuthor from './pages/AboutAuthor';
import Presentation from './pages/Presentation';
import Overview from './pages/Overview';
import SimilarBooks from './pages/SimilarBooks';

function App() {
  const router = createBrowserRouter([
    {
      path: PathConstants.HOME,
      element:<Home />,
    },
    {
      path: PathConstants.MAP,
      element:<Map />
    },
    {
      path: PathConstants.BOOK,
      element:<Book />,
      children: [
        { path: PathConstants.ABOUT, element: <AboutAuthor/>},
        { path: PathConstants.PRESENTATION, element: <Presentation/>},
        { path: PathConstants.OVERVIEW, element: <Overview/>},
        { path: PathConstants.SIMILARBOOKS, element: <SimilarBooks/>},
      ]
    },
    // {
    //   path: PathConstants.PROFILE,
    //   element:<Profile />
    // },
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;
