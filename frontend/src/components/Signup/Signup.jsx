import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function SignUp() {

    const [error, setError] = useState("");
    const [data, setData] = useState({
        adminFirstName: "",
        adminLastName: "",
        adminEmail: "",
        adminPassword: "",
        adminID: ""
    });

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) =>{
        setData({
            ...data,
            [input.name]: input.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const url = "http://localhost:5555/admin";
            const res = await axios.post(url, data);
            navigate('/admin/login');
        } 
        catch (error) {
            if(error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500)
            {
                setError(error.response.data.message);
            }   
        }
    }

    return (
        <div class="h-100 bg-dark">
            <div class="container py-4 h-100"> 
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        <div class="card my-3"> 
                            <div class="row g-0">
                                <div class="col-xl-5 d-none d-xl-block">
                                    <img 
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" 
                                        class="img-fluid"
                                        style={{ maxWidth: '450px', objectFit: 'cover' }} 
                                    />
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body mt-3 p-md-4 text-black">
                                        <h3 class="mb-4 text-uppercase">Admin registration form</h3>

                                        <div class="form-outline mb-3">
                                            <input type="text" id="form3Example97" class="form-control form-control-lg"
                                                name='adminFirstName'
                                                onChange={handleChange}
                                                value={data.adminFirstName}
                                                required
                                            />
                                            <label class="form-label" for="form3Example97">Admin ID</label>
                                        </div>

                                        <div class="form-outline mb-3">
                                            <input type="text" id="form3Example97" class="form-control form-control-lg"
                                                name='adminID'
                                                onChange={handleChange}
                                                value={data.adminID}
                                                required
                                            />
                                            <label class="form-label" for="form3Example97">First name</label>
                                        </div>

                                        <div class="form-outline mb-3">
                                            <input type="text" id="form3Example97" class="form-control form-control-lg"
                                                name='adminLastName'
                                                onChange={handleChange}
                                                value={data.adminLastName}
                                                required
                                            />
                                            <label class="form-label" for="form3Example97">Last name</label>
                                        </div>

                                        <div class="form-outline mb-3">
                                            <input type="email" id="form3Example97" class="form-control form-control-lg"
                                                name='adminEmail'
                                                onChange={handleChange}
                                                value={data.adminEmail}
                                                required
                                            />
                                            <label class="form-label" for="form3Example97">Email ID</label>
                                        </div>

                                        <div class="form-outline mb-3"> 
                                            <input type="text" id="form3Example97" class="form-control form-control-lg"
                                                name='adminPassword'
                                                onChange={handleChange}
                                                value={data.adminPassword}
                                                required
                                            />
                                            <label class="form-label" for="form3Example8">Password</label>
                                        </div>

                                        {error && <div class="row p-3 bg-waring justify-content-center">{error}</div>}
                                        <div class="d-flex justify-content-center pt-3">
                                            <button type="button" class="btn btn-warning btn-lg ms-2"
                                             onClick={handleSubmit}
                                             >Sign Up</button>
                                        </div>

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

export default SignUp;
