import { useState, useEffect } from 'react';
import style from './style.module.css'
import { Link } from 'react-router-dom';

function Card(){
    const [productDetails, setProductDetails] = useState([]);
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
        try {
            fetch("http://localhost:4001/api/products")
            .then(res => res.json())
            .then(res => {setProductDetails(res)
                setLoading(false);
            })
        } catch (error) {
            console.log("product details can not fetch", error);
            setLoading(false);

        }
    }, []);
    
    return(
        <div class="row justify-content-evenly">
            {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                productDetails.map((product) => (
                    <div class="col-md-4 col-lg-3 col-sm-6 col-xs-12" className={style.card}>
                        <div class="card align-items-center ">
                            <img class="card-img-top"
                                src={product.productImg} 
                                className={style.img}
                            />
                            <div class="card-body">
                                <h5 class="card-title">{product.productName}</h5>
                                <p class="card-text">{product.productCategory}</p>
                                <p class="card-text">Price: {product.productPrice}$</p>
                                <p class="card-text"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlLxll5GDhKo6sdcFvxLf2X5ZRUzjEzIDAA&s" width={"100px"}/></p>
                                <Link to={`/productdetails/${product._id}`}>
                                    <button class="btn btn-primary">More Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default Card;