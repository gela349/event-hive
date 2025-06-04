import { createBrowserRouter, RouterProvider } from "react-router"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import ViewEvent from "./Pages/ViewEvent"
import ViewCollege from "./Pages/ViewCollege"
import CreateEvent from "./Pages/CreateEvent"
import NotFound from "./Pages/NotFound"

const eventHiveRouter = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/register", element: <Register />},
  {path: "/login", element: <Login />},
  {path: "/view-event", element: <ViewEvent />},
  {path: "/view-college", element: <ViewCollege />},
  {path: "/create-event", element: <CreateEvent />},
  {path: "*", element: <NotFound />},
]);

function App() {
  return (
    <>
   <RouterProvider router={eventHiveRouter} />
    </>
  )
}

export default App
