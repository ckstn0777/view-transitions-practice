import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Example1 from "./pages/Example1";
import Example2 from "./pages/Example2";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/example/1",
      element: <Example1 />,
    },
    {
      path: "/example/2",
      element: <Example2 />,
    },
  ],
  {
    basename: "/view-transitions-practice",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
