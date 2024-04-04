import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'
import './ShopCategory.scss'
import dropdownIcon from '../../assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import Footer from '../../Components/Footer/Footer'

const ShopCategory = ({ category, banner }) => {
  const products = useContext(ProductsContext);

  return (
    <div className='shopCategory'>
      <img src={banner} />
      <div className="indexSortBy">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <div className="sort">
          Sort by <img src={dropdownIcon} />
        </div>
      </div>
      <div className="products">
        {products.map(product => {
          if (product.category === category) {
            return (
              <Item key={product.id} item={product} />
            )
          }
        })}
      </div>
      <Footer />
    </div>
  )
}

export default ShopCategory