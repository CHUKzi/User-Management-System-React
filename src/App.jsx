import { useState } from 'react'
import './App.css'


function App() {

  const name = "TESTING";

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mt-3">
            <h1>User Management System</h1>
            <button className='btn btn-primary'>Add New User </button>
            <p> { } </p>
            <table id="myTable" className='table table-striped'>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Royan</td>
                  <td>Harsha</td>
                  <td>royanharsha6@gmail.com</td>
                  <td>0765850733</td>
                  <td>
                    <div className="dropdown"><a href="#" className="dropdown-toggle card-drop" data-bs-toggle="dropdown" aria-expanded="false">
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                      <ul className="dropdown-menu dropdown-menu-end"><li><a className="dropdown-item" href="https://dev.cclk.alexlanka.com/users/view/9">
                        <i className="fas fa-eye align-middle"></i>&nbsp;View
                      </a></li><li><a className="dropdown-item data-edit" href="javascript:void(0)" data-csrf="OqYHCYUhNi21SzeozHxNaEXWUi7dJyffcn4uOXGB" data-url="https://dev.cclk.alexlanka.com/users/edit/9">
                        <i className="fas fa-edit align-middle"></i>&nbsp;Edit
                      </a></li><li><a className="dropdown-item text-danger data-delete" href="javascript:void(0)" data-csrf="OqYHCYUhNi21SzeozHxNaEXWUi7dJyffcn4uOXGB" data-url="https://dev.cclk.alexlanka.com/users/destroy/9">
                        <i className="fas fa-trash align-middle"></i>&nbsp;Delete
                      </a></li></ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </>
  )
}

export default App
