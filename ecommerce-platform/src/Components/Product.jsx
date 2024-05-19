import React from 'react'
import { useGlobalContext } from '../context'
import './Product.css'

const Product = ({data}) => {
  const {setCartAdded, cartAdded} = useGlobalContext();
  const handleCart = () => {
     setCartAdded([...cartAdded, data])
  }

  return (
    <div>
      <div className="Product">
        <img src={data.image} alt="" className='Product_image'/>
        <div className="Product_content">
        <div className="Product_title">{data.title}</div>
        <div className="Product_price">$ {data.price}</div>
        <button className='buy_button' onClick={handleCart}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
