import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../../Components/BreadCrum/BreadCrum'
import './Product.scss'
import Detail from '../../Components/Detail/Detail'
import Footer from '../../Components/Footer/Footer'
const Product = () => {
  const products = useContext(ProductsContext)
  const {productId} = useParams();
  const product = products.find(product=>product.id === parseInt(productId) );

  return (
    <div className='product'>
      <BreadCrum product={product}/>
      <Detail product={product}/>
      <Footer/>
    </div>
  )
}

export default Product