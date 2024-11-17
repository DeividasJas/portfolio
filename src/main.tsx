import './styles/index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutPage from './pages/about/AboutPage.tsx';
import HomePage from './pages/home/HomePage.tsx';
import ProjectsPage from './pages/projects/ProjectsPage.tsx';
import ProjectPage from './components/ProjectPage.tsx';
import ErrorPage from './Error-page.tsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,
        // children: [
        //   {
        //     path:`basketball`,
        //     element: <AboutPage/>,
        //     errorElement: <ErrorPage/>
        //   }
        // ]
      },
      {
        path: '/projects/:projectName',
        element: <ProjectPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
