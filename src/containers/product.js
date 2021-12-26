import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product() {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
                <div key={id}>
                <Link to={`/product/${id}`}>
                    <div className="card col-4">
                        <img src={image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{price}</p>
                            <p className="card-text">{category}</p>
                        </div>
                    </div>
                </Link>
                </div>

        );
    });
    return <>{renderList}</>;
}
