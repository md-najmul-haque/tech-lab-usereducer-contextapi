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
                path: "Home",
                element: <Home />,
            },
            {
                path: "About",
                element: <About />,
            },
            {
                path: "Cart",
                element: <Cart />,
            },
            {
                path: "TopRated",
                element: <TopRated />,
            },
        ],
    },
]);

export default routes;