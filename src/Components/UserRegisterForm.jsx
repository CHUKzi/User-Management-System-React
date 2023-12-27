import React from 'react'
import { Link } from 'react-router-dom'

function UserRegisterForm() {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User Register Form</h5>
                            <form className="mt-3">
                                <div className="row">
                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">First Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="First name" />
                                    </div>
                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">Session Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Last name" />
                                    </div>
                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">Session Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">Session Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Mobile" />
                                    </div>
                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">Session Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">Session Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                </div>
                                <div className="text-sm-end mt-3">
                                    <Link to="/users"><button type="button" className="btn btn-danger px-5">Back</button></Link>
                                    &nbsp;
                                    <button type="button" className="btn btn-primary px-5">Create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegisterForm