import React,{useEffect} from 'react';
import Product from './product';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from 'axios';

export default function ProductList() {
    const products = useSelector((state) => state.allProducts.products);
    const dispatch = useDispatch();
    const getProducts = async (req, res) => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        getProducts();
    }, [])

   
    return (
        <div className="container-fluid">
            <h1>product list</h1>
            <div className="productsContainer">
            <Product />
            </div>
            
        </div>
    )
}
