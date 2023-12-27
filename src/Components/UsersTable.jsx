import React from 'react'
import { Link } from 'react-router-dom';

function UsersTable() {
    return (

        <>
            <div className="text-sm-end mt-3">
                <Link to="/registration" className="btn btn-primary px-5">Create New User </Link>
            </div>
            <table id="myTable" className="table table-striped">
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
                            <button type="button" className="btn btn-primary btn-sm">View</button>
                            &nbsp;
                            <button type="button" className="btn btn-success btn-sm">Edit</button>
                            &nbsp;
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default UsersTable