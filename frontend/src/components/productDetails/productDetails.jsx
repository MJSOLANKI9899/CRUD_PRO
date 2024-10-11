import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.css';

function ProductDetails() {
    const [product, setProduct] = useState({});
    const { productID } = useParams();

    useEffect(() => {
        try {
            fetch(`http://localhost:5555/api/products/productdetails/${productID}`)
                .then(res => res.json())
                .then(res => setProduct(res));
        } catch (error) {
            console.log("product details cannot be fetched", error);
        }
    }, [productID]);

    return (
        <div className='container-fluid bg-secondary-subtle vh-75 p-4'>
            <div className='row h-100 justify-content-center'>

                <div className='col-sm-12 col-lg-10 bg-danger rounded-5' style={{minHeight: "570px"}}>
                    <div className='row h-100 p-5 w-100 justify-content-center'>
                        <div className="col-sm-6 col-lg-5 rounded-5" style={{maxHeight: "570px"}}>
                            <img
                                className={style.img}
                                src={product.productImg}
                                alt={product.productName}
                            />
                        </div>
                        <div className="col-sm-6 col-lg-6 rounded-5 bg-warning-subtle text-start p-5" style={{maxHeight: "470px"}}>
                            <h3>{product.productName}</h3>
                            <p><strong>Price:</strong> {product.productPrice}$</p>
                            <p><strong>Description:</strong> {product.productDetails}</p>

                            <div class="d-flex">
                                <button class="btn btn-primary me-3 mt-5">Add to Cart</button>
                            </div>

                            <div class="row mt-5">
                                <div class="ml-auto">
                                    <button class="btn btn-outline-secondary m-2">
                                        <i class="bi bi-share"></i> Share
                                    </button>
                                    <button class="btn btn-outline-danger m-2">
                                        <i class="bi bi-heart"></i> Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;




