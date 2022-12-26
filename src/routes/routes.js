import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import About from '../Pages/About';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';
import TopRated from '../Pages/TopRated';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "top-rated",
                element: <TopRated />,
            },
        ],
    },
]);

export default routes;