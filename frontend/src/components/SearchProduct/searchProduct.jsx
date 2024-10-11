import { useParams, Link } from "react-router-dom";
import style from './style.module.css';
import { useState, useEffect } from "react";

function SearchProduct() {

    const [yourSearchProduct, setYourSearchProduct] = useState([]);
    const { searchID } = useParams();
    console.log("searchID", searchID);


    useEffect(() => {
        try {
            fetch(`http://localhost:5555/api/products/searchproduct/${searchID}`)
                .then(res => res.json())
                .then(res => setYourSearchProduct(res))
        } catch (error) {
            console.log("product details can not fetch", error);
        }
    }, [searchID]);

    return (
        <div class="row bg-info vh-100">
            {yourSearchProduct.length === 0 ? (
                <div class="col-12 text-center text-white p-5">
                    <h3 class="bg-success p-3">Product Not Found</h3>
                </div>
            ) : (
                <div class="row justify-content-evenly mt-2">
                    {yourSearchProduct.map((product) => (
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
                                    <p class="card-text"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrlLxll5GDhKo6sdcFvxLf2X5ZRUzjEzIDAA&s" width={"100px"} /></p>
                                    <Link to={`/productdetails/${product._id}`}>
                                        <button class="btn btn-primary">More Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchProduct;