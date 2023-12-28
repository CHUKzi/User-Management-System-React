import React, { useState, useEffect } from 'react';
import MenuLink from './MenuLink'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import toastr from 'toastr'
import axios from 'axios'

function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const authToken = Cookies.get('authToken');

  useEffect(() => {
    checkAuthenticationStatus();
  }, []);

  const [AuthData, setFAuthData] = useState({
    name: '',
    email: '',
  });

  const checkAuthenticationStatus = async () => {
    try {
      const authToken = Cookies.get('authToken');
      if (authToken) {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/auth/me', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (response.data.success) {
          const userData = response.data.data;
          setFAuthData({
            name: userData.name,
            email: userData.email,
          });
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Authentication status check error:', error);
      setIsLoggedIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (response.data.success) {
        Cookies.remove('authToken');
        setIsLoggedIn(false);
        navigate('/login');
        toastr.success(response.data.message);
      } else {
        toastr.error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toastr.error('Logout failed');
    }
  };

  return (
    /*  <h1>User Management System</h1> */
    <>
      <header className="p-3 bg-dark text-white">
        <div className="container">

          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <MenuLink linkName="Home" url="/" />
              <MenuLink linkName="About" url="/about" />
              <MenuLink linkName="Contact Us" url="/contact" />
              {AuthData && AuthData.name ? (
                <MenuLink linkName="All Users" url="/user/dashboard" />
              ) : (
                <div></div>
              )}
            </ul>

            <div className="text-end">
              {isLoggedIn ? (
                <button type="button" className="btn btn-danger me-2" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to={'/login'}>
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
      {AuthData && AuthData.name ? (
        <div className="container mt-2">Welcome {AuthData.name}!</div>
      ) : (
        <div></div>
      )}
    </>
  )
}
export default Header