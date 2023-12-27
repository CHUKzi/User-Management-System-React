import { useState } from 'react'
import DataTable from 'datatables.net-dt';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import UserRegisterForm from '../Components/UserRegisterForm';

function Registration() {

  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            <h1>Registration Page</h1>
            <UserRegisterForm/>
            <Footer/> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Registration
