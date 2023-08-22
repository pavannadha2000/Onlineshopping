import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <div>
      <div className='home'>
        <div className='home_container'>
        <div className='home_image'>
            <img  className='p1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjkgfmuZzihWe7friyHZsuBB9XyLZejikOQ&usqp=CAU" ></img>
            
            </div>
            
            <div className='home_row'>
              <Product />
              
            </div>
            
            
            
            <div className='home_row1'>
            <Product />
            <Product/>
            
                
            </div>
            <div className='home_row'>
            
                
            </div>
            <div className='home_row'>
              
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
