import { useState, useEffect } from 'react';
import style from './style.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home(){
    const [productDetails, setProductDetails] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            fetch("http://localhost:5555/api/products")
            .then(res => res.json())
            .then(res => setProductDetails(res))
        } catch (error) {
            console.log("product details can not fetch", error);
        }
    }, []);
    
    return(
        <div class="row justify-content-evenly">
            {productDetails.map((product) => (
                <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12" className={style.card}>
                    <div class="card align-items-center">
                        <img class="card-img-top"
                            src={product.productImg} 
                            className={style.img}
                        />
                        <div class="card-body">
                            <h5 class="card-title">{product.productName}</h5>
                            <p class="card-text">{product.productCategory}</p>
                            <p class="card-text">Price: {product.productPrice}</p>
                            <p class="card-text"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlLxll5GDhKo6sdcFvxLf2X5ZRUzjEzIDAA&s" width={"100px"}/></p>
                            <Link to={`/productdetails/${product._id}`}>    
                                <button class="btn btn-outline-success me-3">More Details</button>
                            </Link>
                            <Link to={`/editproduct/${product._id}`}>
                                <button class="btn btn-outline-primary">Edit</button>
                            </Link>
                            <div class="justify-content-center">
                            <button class="btn btn-outline-danger mt-2"
                                onClick={ async ()=>{    
                                    try {
                                        const res = await fetch(`http://localhost:5555/api/products/deleteproduct/${product._id}`,
                                            {method: 'DELETE'}
                                        )
                                        .then(res => console.log('delete response' ,res));
                                        if (res.ok) {
                                            console.log('Deleted successfully');
                                            setProductDetails(productDetails.filter((pro) => pro._id !== product._id));
                                        } 
                                    } catch (error) {
                                        console.log('delete product problem' , error)
                                    }                                
                                }}
                            >
                                Remove
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home;