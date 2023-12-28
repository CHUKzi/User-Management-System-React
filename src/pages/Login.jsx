import { useState } from 'react'
import DataTable from 'datatables.net-dt';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import UserEditForm from '../Components/UserEditForm';
import UserLogin from '../Components/UserLogin';

function Login() {

  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            {/* <h1>User Login Page</h1> */}
            <UserLogin/>
            <Footer/> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Login
