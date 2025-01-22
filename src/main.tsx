import "./styles/index.css";
import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import ProjectsPage from "./pages/projects/ProjectsPage.tsx";
import ProjectPage from "./components/ProjectPage.tsx";
import ErrorPage from "./Error-page.tsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/work",
        element: <ProjectsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/work/:projectName",
        element: <ProjectPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
