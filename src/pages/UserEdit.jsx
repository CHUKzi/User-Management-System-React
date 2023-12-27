import { useState } from 'react'
import DataTable from 'datatables.net-dt';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import UserEditForm from '../Components/UserEditForm';

function Registration() {

  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            <h1>User Edit Page</h1>
            <UserEditForm/>
            <Footer/> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Registration
