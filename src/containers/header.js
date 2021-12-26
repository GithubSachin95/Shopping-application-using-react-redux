import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <span className="h1">Redux-app</span>
                <Link to={`/cart`}><button  type="button" className="btn btn-primary cartBtn">Go to cart</button>
                </Link>
            </nav>
            
        </div>
    )
}
