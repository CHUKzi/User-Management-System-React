import { useState } from 'react'
import DataTable from 'datatables.net-dt';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function Registration() {

  return (
    <>
    <Header/>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            
            <h1>Registration Page</h1>
            <Footer/> 
          </div>
        </div>
      </div>

    </>
  )
}

export default Registration