import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/signup";
import SignIn from "./components/foodorder";
import Pricing from "./components/click";
import AboutPage from "./components/About";
import FoodEnterprisePage from "./components/FoodEnterprisePage"; // Import the FoodEnterprisePage component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/parthi",
    element: <SignIn />,
  },
  {
    path: "/ajay",
    element: <SignUp />,
  },
  {
    path: "/nambu",
    element: <Pricing />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/food-enterprise", // Add a new route for FoodEnterprisePage
    element: <FoodEnterprisePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
