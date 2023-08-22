import React from 'react';
import './Product.css';

function Product(id,title,image,price,rating) {
  return (
    <div>
      <div className='products'>
        <div className='product_info'>
          
            <p>Iphone 14pro</p>
            <p className='product_price'>
              <small></small>
              <strong>30</strong>
              </p>
            <div className='product_rating'>****</div>
            <div className='product_info'>
                   <img src="https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp1_1__2.jpg" alt=''width={260} height={200}></img>
                    <br/>
            </div>
            {/* <img src="https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp1_1__2.jpg" alt=''width={250} height={200}></img>
            <br/> */}
        <button id='btn'>Add to Basket</button>
        
        </div>
        {/* <img src="https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/1/2/12_pro_grp1_1__2.jpg" alt=''></img>
        <button >Add to Basket</button> */}
      
      <div className='product_info1'>
            <p>Iphone 14pro</p>
            <p className='product_price'>$1,00,000</p>
            <div className='product_rating'>****</div>
            <img src="https://m.media-amazon.com/images/I/61VfL-aiToL._SX679_.jpg" alt=''width={200} height={200}></img>
            <br/>
        <button id='btn'>Add to Basket</button>
        </div>
        <div className='product_info2'>
            <p>Iphone 14pro</p>
            <p className='product_price'>$1,00,000</p>
            <div className='product_rating'>****</div>
            <img src="https://m.media-amazon.com/images/I/51eFNkbJlEL._SY300_SX300_QL70_FMwebp_.jpg" alt=''width={300} height={200}></img>
            <br/>
        <button id='btn' >Add to Basket</button>
        </div>
        <div className='product_info3'>
            <p>Iphone 14pro</p>
            <p className='product_price'>$1,00,000</p>
            <div className='product_rating'>****</div>
            <img src="https://m.media-amazon.com/images/I/41b5W7QfrOL._SX300_SY300_QL70_FMwebp_.jpg" alt=''width={250} height={200}></img>
            <br/>
        <button id='btn'>Add to Basket</button>
        </div>
     </div>
    </div>
  )
}

export default Product
