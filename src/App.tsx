import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Scroll } from "./animation";
import { Home, NotFound } from "./pages";
import { Footer, Navbar } from "./components/molecules";

// this is just for dome paages you want to repeat same component
const Root = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <Root/> to affect it
]);
export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return (
    <>
      <Outlet />
      <RouterProvider router={router} />
    </>
  );
}
