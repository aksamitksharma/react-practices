import React from "react";
import Home from "./views/Home";
import About from "./views/About";
import Product from "./components/Product";
import ProductList from "./views/ProductList";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from "./views/Navigation";
import Error404 from "./views/Error404";
import Members from "./components/Members";

const AppRoute = () => {
    return(
        <>
            <h1>Route</h1>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}  />
                    <Route path="/products" element={<ProductList/>} />
                    <Route path="/product/:id/:name" element={<Product/>} />
                    <Route path="/members" element={<Members/>} />
                    <Route path="*" element={<Error404/>} />
                </Routes>
            </Router>
        </>
    );
}

export default AppRoute;