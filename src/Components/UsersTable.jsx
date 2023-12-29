import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import Swal from 'sweetalert2';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-buttons-dt/css/buttons.dataTables.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/dataTables.buttons';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { Link } from 'react-router-dom';

function UsersTable() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const tableRef = useRef(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/v1/users');
            const usersData = response.data.data || [];
            setUsers(usersData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching users:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (tableRef.current && !loading) {
            $(tableRef.current).DataTable({
                order: [[0, 'desc']],
                aLengthMenu: [
                    [10, 25, 50, 100, -1],
                    [10, 25, 50, 100, "All"]
                ],
                dom: 'l<"row"<"col-md-8"B><"col-md-4 pull-right"f>>rtip',
                buttons: [
                    {
                        extend: 'csv',
                        footer: true,
                        charset: 'UTF-8',
                        bom: true,
                        text: '<i class="fas fa-file-csv"></i> Export to CSV',
                        exportOptions: {
                            columns: ':not(.no-export)'
                        }
                    },
                    {
                        extend: 'print',
                        footer: true,
                        text: '<i class="fas fa-print"></i> Print',
                        exportOptions: {
                            columns: ':not(.no-export)'
                        }
                    }
                ],
            });
        }
    }, [loading]);

    const handleDelete = (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this user!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://127.0.0.1:8000/api/v1/users/delete/${userId}`);
                    if (response.data.success) {
                        toastr.success(response.data.message);
                        fetchUsers();
                    } else {
                        toastr.error(response.data.message);
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });
    };

    return (
        <>
            <div className="text-sm-end mt-3 mb-4">
                <Link to="/registration" className="btn btn-primary px-5">Create New User </Link>
            </div>
            <table ref={tableRef} className="table table-striped">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th className='no-export'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        <tr>
                            <td colSpan="5">Loading...</td>
                        </tr>
                    ) : Array.isArray(users) && users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    {/* <button type="button" className="btn btn-primary btn-sm">
                                        View
                                    </button> */}
                                    &nbsp;
                                    <Link to={`/edituser?user_id=${user.id}`}>
                                        <button type="button" className="btn btn-success btn-sm">
                                            <i className="fas fa-edit align-middle"></i>&nbsp;Edit
                                        </button></Link>
                                    &nbsp;
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                                        <i className="fas fa-trash align-middle"></i>&nbsp;Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No records found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}
export default UsersTable