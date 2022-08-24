import React from 'react'
import { Link } from 'react-router-dom'
import './orderPlaced.css';

const OrderPlaced = () => {
  return (
    <div>
          <div className="orderplaced">
        <h2>Your Order is placed
            <br/>
            It will be delivered Soon 
        </h2>
        <button className="btn">
            <Link to="/" className='linkbtn'>
            Back to Home
            </Link>
            </button>
        </div>
    </div>
  )
}

export default OrderPlaced