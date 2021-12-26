import React, { useEffect } from 'react'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from '../redux/actions/productActions';

export default function Cart() {

    const cart = useSelector((state) => state.setCart.cart);
    //const { id, title, description, rating, image, price, category } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        getCart();

    })
    const getCart = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/carts/1`)
            .catch((err) => {
                console.log("Err: ", err);
            });
        console.log(response);
        dispatch(setCart(response));
    };
    return (
        <div>
            <h1>Your cart</h1>
            <ul>
                {cart.data.products.map((product) =>
                <li>{product.productId}</li>)}
            </ul>
        </div>
    )
}
