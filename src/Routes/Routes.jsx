import React from "react";

import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/Root/ErrorPage/ErrorPage";
import Home from "../pages/Root/Home/Home";
import About from "../pages/Root/About/About";
import BookDetails from "../pages/Root/BookDetails/BookDetails";
import ReadList from "../pages/Root/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("data.json"),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "readList",
        Component: ReadList,
        loader: () => fetch("data.json"),
      },
      {
        path: "bookDetails/:id",
        loader: () => fetch("data.json"),
        Component: BookDetails,
      },
    ],
  },
]);
