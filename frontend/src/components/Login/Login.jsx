import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
 
const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();
	
	
	
	const handleChange = ({ currentTarget: input }) => {
		setData({ 
			...data,
			[input.name]: input.value 
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5555/admin/adminauth";
			const res = await axios.post(url, data);
			
            const token = res.data.token;
            localStorage.setItem('admintoken', token);
			navigate("/home")
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


    

    return (
        <div class="vh-100" style={{ backgroundColor: '#9A616D' }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style={{ borderRadius: "1rem" }}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" class="img-fluid" style={{ borderRadius: '10px' }} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">

                                        <form>

                                            <div class="d-flex align-items-center mb-3 pb-1">
                                                <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                                                <span class="h1 fw-bold mb-0">Logo</span>
                                            </div>

                                            <h5 class="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input type="email" 
                                                    id="form2Example17" 
                                                    class="form-control form-control-lg"
                                                    placeholder="Email"
                                                    name="adminEmail"
                                                    onChange={handleChange}
                                                    value={data.adminEmail}
                                                    required 
                                                />
                                                <label class="form-label" for="form2Example17">Email address</label>
                                            </div>

                                            <div data-mdb-input-init class="form-outline mb-4">
                                                <input 
                                                    type="password" 
                                                    id="form2Example27" 
                                                    class="form-control form-control-lg"
                                                    placeholder="Password"
                                                    name="adminPassword"
                                                    onChange={handleChange}
                                                    value={data.adminPassword}
                                                    required 
                                                    />
                                                <label class="form-label" for="form2Example27">Password</label>
                                            </div>
                                            {error && <div class="bg-danger text-center rounded p-2">{error}</div>}
                                            <Link to="/home">
                                                <div class="pt-1 mb-4">
                                                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button"
                                                        onClick={handleSubmit}
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </Link>
                                            <a class="small text-muted" href="#!">Forgot password?</a>
                                            <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? 
                                                <Link to={'/signup'}
                                                    style={{ color: '#393f81' }}
                                                    >Register here
                                                </Link>
                                            </p>
                                            <a href="#!" class="small text-muted">Terms of use.</a>
                                            <a href="#!" class="small text-muted">Privacy policy</a>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;