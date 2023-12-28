import React, { useState } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';


function UserLogin() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    

        setErrors({
            ...errors,
            [e.target.name]: '', 
        });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/auth', formData);

            if (response.data.success === false) {
                if (response.data.errorMessage) {
                    toastr.error(response.data.errorMessage);
                } else if (response.data.errorMessages) {
                    setErrors(response.data.errorMessages);
                }
            }
            
            if (response.data.token) {
                const token = response.data.token;
                
                Cookies.set('authToken', token, { expires: 1 });


                navigate('/user/dashboard');
            }

        } catch (error) {
            console.error('Login error:', error);
        }
    };
    
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="card-body pt-0">
                                <div className="mt-5 text-center">
                                    <span className="logo-lg">
                                        {/* <img src="" alt height={55} /> */}
                                    </span>
                                    <h4 className="mb-3 mt-4">Login to Your Account</h4>
                                </div>
                                <div className="p-2">
                                    <form className="form-horizontal">
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Enter Email"
                                                autoComplete="email"
                                                autoFocus
                                                onChange={handleChange}
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email.map((message, index) => (
                                                        <span key={index}>{message}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <div className="input-group auth-pass-input-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                    placeholder="Enter password"
                                                    onChange={handleChange}
                                                />
                                                {errors.password && (
                                                    <div className="invalid-feedback">
                                                        {errors.password.map((message, index) => (
                                                            <span key={index}>{message}</span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-3 d-grid">
                                            <button
                                                type="button"
                                                className="btn btn-primary waves-effect waves-light"
                                                onClick={handleLogin}
                                            >
                                                Log In
                                            </button>
                                        </div>
                                        <div className="mt-4 text-center">
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserLogin