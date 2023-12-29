import { useState } from 'react'
import DataTable from 'datatables.net-dt';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            <h1>Home Page</h1>
            <Footer />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
