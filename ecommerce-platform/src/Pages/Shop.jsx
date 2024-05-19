import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import Product from '../Components/Product'
import './Shop.css'
import Navbar from '../Components/Navbar'
import Loading from '../Components/Loading'

const Shop = () => {
  const {data, loading, setData} = useGlobalContext();
  const [newData, setNewData] = useState(data)
  const category = ["men's clothing", "jewelery", "electronics", "women's clothing", "All"]
  
  const handleClick = (item) =>{
    const new_Data = data.filter((product) => {
      if(item == 'All'){
        return product
      }
      else{
        if(product.category == item){
          return item
        }
      }
    })
    setNewData(new_Data)
  }

  return (
    <div className='Shop'>
      <Navbar />
      <div className="Shop_category_buttons">
      {
        category.map((item, index) => {
          return <button className='Shop_category_button' key={index} onClick={() => handleClick(item)}>{item}</button>
        })
      }
      </div>
      <div className="Shop_items">
      {
        loading ? <Loading /> : newData.map((item, index) => {
          return <Product key={index} data={item} />
        })
      }
      </div>
    </div>
  )
}

export default Shop
