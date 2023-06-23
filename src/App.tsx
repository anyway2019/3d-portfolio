import Container from "./components/Container";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import "./App.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactPage from "./pages/Contact";
import StudioPage from "./pages/Studio";
import WorksPage from "./pages/Works";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: "/studio",
        element: <StudioPage />,
      },
      {
        path: "/works",
        element: <WorksPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

function Layout() {
  console.log("home.tsx");
  return (
    <Container>
      <Navbar />
      <Outlet />
    </Container>
  );
}

function Home() {
  console.log("home.tsx");
  return (
    <>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </>
  );
}
