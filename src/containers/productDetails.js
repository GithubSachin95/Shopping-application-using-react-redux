import React, { useEffect } from 'react';
import axios from "axios";
import {
    selectedProduct, removeProduct

} from "../redux/actions/productActions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {

    const { productId } = useParams();
    const product = useSelector((state) => state.selectedProduct.product);
    const { id, title, description, rating, image, price, category } = product;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId && productId !== "") getProduct(productId);
        return () => {
            dispatch(removeProduct());
        };

    }, [productId]);
    
    const getProduct = async (id) => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response.data);
        dispatch(selectedProduct(response.data));
    };


    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <h1>{title}</h1>
                    <br/>
                    <br/>
                    <img className ="productImage" src={image}></img>
                </div>
                <div className="col-8">
                    <h1>Category : <span className="badge bg-secondary">{category}</span></h1>
                    <h1>Product ID : <span className="badge bg-secondary">{id}</span></h1>
                    <h2>Price : <span className="badge bg-secondary">{price}</span></h2>
                    <br/>
                    <p className="productDescription" >Product Description : {description}</p>
                    <br/>
                    
                </div>
            </div>




        </div>
    )
}

export default ProductDetails;
