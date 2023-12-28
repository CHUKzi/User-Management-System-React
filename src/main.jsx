import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Registration from './pages/Registration.jsx';
import ContactUs from './pages/ContactUs.jsx';
import 'toastr/build/toastr.min.css';
import UserEdit from './pages/UserEdit.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Auth/Dashboard.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


/* import './index.css' */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/edituser",
    element: <UserEdit/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
