import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import style from './style.module.css'

function AddProduct() {

    const [data, setData] = useState({
        productName: "",
        productPrice: "",
        productId: "",
        productImg: "",
        productCategory: "",
        productStock: "",
        productDetails: ""
    });

    const [error, setError] = useState("");
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
            const url = "http://localhost:5555/api/products/add/product";
            const res = await axios.post(url, data);
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
        <div class="vh-100 container bg-success" style={{ backgroundColor: '#9A616D' }}>
            <div class="container py-2 h-100">
                <form class="justify-content-center">

                    <div class="d-flex align-items-center mb-1 pb-1">
                        <i class="fas fa-cubes fa-2x me-3" style={{ color: "#ff6219" }}></i>
                        <span class="h1 fw-bold mt-4" className={style.mytext}>Add Product Details</span>
                    </div>

                    <div class="input-group flex-nowrap mb-3"  style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productName'
                            onChange={handleChange}
                            value={data.productName}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Price</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productPrice'
                            onChange={handleChange}
                            value={data.productPrice}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Id</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productId'
                            onChange={handleChange}
                            value={data.productId}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Image Path</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productImg'
                            onChange={handleChange}
                            value={data.productImg}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Categoty</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productCategory'
                            onChange={handleChange}
                            value={data.productCategory}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Stock</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productStock'
                            onChange={handleChange}
                            value={data.productStock}
                            required
                        />
                    </div>
                    <div class="input-group flex-nowrap mb-3" style={{ maxWidth: "60%" }}>
                        <span class="input-group-text" id="addon-wrapping">Product Details</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"
                            name='productDetails'
                            onChange={handleChange}
                            value={data.productDetails}
                            required
                        />
                    </div>
                    {error && <div class="bg-danger p-3 border border-1">{error}</div>}
                    <Link to="/home">
                        <div class="mt-4 justify-content-center">
                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button"
                                onClick={handleSubmit}
                            >Add Product</button>
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;