import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Animes, { loader as animesLoader } from './pages/Animes';
import Home from './pages/Home';
import Root from './pages/Root';
import Error from './pages/Error';
import CardDetailsPage, { loader as cardDetailsLoader } from './pages/CardDetailsPage';
import AnimeRegisterFormPage, { action as registerAnimeAction } from './pages/AnimeRegisterFormPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "animes",
        element: <Animes />,
        loader: animesLoader
      },
      {
        path: "animes/:id",
        element: <CardDetailsPage />,
        loader: cardDetailsLoader
      },
      {
        path: "animes/new",
        element: <AnimeRegisterFormPage />,
        action: registerAnimeAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }/>
  </React.StrictMode>,
)
