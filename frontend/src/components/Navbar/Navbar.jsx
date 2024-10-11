import { Link, useNavigate } from "react-router-dom";
import style from './style.module.css'
import { useState } from "react";

function Navbar() {

    const [secarchProduct, setSecarchProduct] = useState('');

    const navigate = useNavigate();

    const handleLogout = () => {
		localStorage.removeItem("token");
        navigate('/login');
	};

    return (
        <div class="row container-fluid" style={{width:"101.6%"}}>
            <nav class="navbar navbar-expand-lg bg-dark bg-gradient container-fluid">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                    <img className="ms-2 img-fluid rounded-pill"
                            src="https://img.freepik.com/premium-vector/colorful-bag-that-says-shopping-here-here_1288538-6301.jpg?size=626&ext=jpg&ga=GA1.1.476167073.1711718447&semt=ais_hybrid"
                            width={"70px"} height={"auto"} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" className={style.customIcon}>
                                <Link to="/home" class="nav-link active">
                                    <div className={style.navComponent}>
                                        All Products
                                    </div>
                                </Link>
                            </li>
                            <li class="nav-item" className={style.customIcon}>
                                <button class="btn btn-primary p-2" onClick={()=>{
                                    navigate('/addproduct')
                                }}>
                                    <div className={style.navComponent}>
                                        Add Product
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" className={style.customIcon}>
                                <button class="btn btn-primary p-2">
                                    <div className={style.navComponent}>
                                        Edit Product
                                    </div>
                                </button>
                            </li>
                            <li class="nav-item" className={style.customIcon}>
                                <button class="btn btn-primary p-2" onClick={()=>{
                                    navigate('/deleteproduct')
                                }}>  
                                    <div className={style.navComponent}>
                                        Delete Product
                                    </div>
                                </button>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" style={{width:"380px"}} type="search" placeholder="Search" aria-label="Search" 
                                onChange={(e)=>setSecarchProduct(e.target.value)}
                            />
                            <button class="btn bg-info"
                                onClick={()=>{
                                    navigate(`/searchproduct/${secarchProduct}`)
                                }}
                            >
                                search
                            </button>
                        </form>
                        <button
                            class="btn btn-outline-info rounded-pill bg-white px-4 mx-3"
                            type="submit"
                            onClick={handleLogout}
                            >
                            logout
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;