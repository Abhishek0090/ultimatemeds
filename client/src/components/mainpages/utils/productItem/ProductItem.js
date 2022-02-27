import React from 'react'
import "./productItem.css";
import BtnRender from './BtnRender'
import {Link} from 'react-router-dom'


function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {
    var desc = product.description;
    // var renew = desc.substring(0,100);
    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <Link to={`/detail/${product._id}`}>
            <img src={product.images.url}  alt="productimg" />
            </Link>

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>₹{product.price}</span>
                <p>{desc}..</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
