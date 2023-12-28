import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';

function UserRegisterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    mobile: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/users/store', formData);
      //console.log(response.data);
      if (response.data.success === false) {
        toastr.error(response.data.message);
        setErrors(response.data.errorMessages);
      } else {
        toastr.success(response.data.message);

        setFormData({
          first_name: '',
          last_name: '',
          mobile: '',
          email: '',
          password: '',
          password_confirmation: '',
        });

        setErrors({});

        navigate('/user/dashboard');
      }
    } catch (error) {
      console.error(error);
    }
  };


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
                                        <input
                                            type="text"
                                            className={`form-control ${errors.first_name ? 'is-invalid' : ''}`}
                                            name="first_name"
                                            placeholder="First name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                        />
                                        {errors.first_name && (
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{errors.first_name}</strong>
                                            </span>
                                        )}
                                    </div>


                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">
                                            Last Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.last_name ? 'is-invalid' : ''}`}
                                            name="last_name"
                                            placeholder="Last name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                        />
                                        {errors.last_name && (
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{errors.last_name[0]}</strong>
                                            </span>
                                        )}
                                    </div>


                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{errors.email[0]}</strong>
                                            </span>
                                        )}
                                    </div>


                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">
                                            Mobile Number <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                                            name="mobile"
                                            placeholder="Mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                        />
                                        {errors.mobile && (
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{errors.mobile[0]}</strong>
                                            </span>
                                        )}
                                    </div>

                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                            name="password"
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                        {errors.password && (
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{errors.password[0]}</strong>
                                            </span>
                                        )}
                                    </div>

                                    <div className="col-sm-6 mt-3">
                                        <label className="form-label">
                                            Confirm Password <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password_confirmation ? 'is-invalid' : ''}`}
                                            name="password_confirmation"
                                            placeholder="Confirm Password"
                                            value={formData.password_confirmation}
                                            onChange={handleChange}
                                        />
                                        {errors.password_confirmation && (
                                            <span className="invalid-feedback" role="alert">
                                                <strong>{errors.password_confirmation[0]}</strong>
                                            </span>
                                        )}
                                    </div>

                                </div>
                                <div className="text-sm-end mt-3">
                                    <Link to="/user/dashboard"><button type="button" className="btn btn-danger px-5">Back</button></Link>
                                    &nbsp;
                                    <button type="button" className="btn btn-primary px-5" onClick={handleSubmit}>
                                        Create
                                    </button>
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