import { useState } from 'react'
import DataTable from 'datatables.net-dt';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import UsersTable from '../Components/UsersTable';

function Users() {

  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            <h1>Users Page</h1>
            <UsersTable/>
            <Footer/> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Users
