import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutUs from './pages/AboutUs.jsx';
import Users from './pages/Users.jsx';
import Registration from './pages/Registration.jsx';
import ContactUs from './pages/ContactUs.jsx';
import 'toastr/build/toastr.min.css';
import UserEdit from './pages/UserEdit.jsx';
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
    path: "/users",
    element: <Users />,
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
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
