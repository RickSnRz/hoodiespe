import React from 'react'
import "./ProductCard.css"

const ProductCard = () => {
  return (
    <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem]'>
            <img className='h-full w-full object-cover object-left-top'
             src="https://www.okchicas.com/wp-content/uploads/2017/10/ropa-invierno-3.jpg" alt=''/>
        </div> 
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>Titulo</p>
            <p>Casaca polar para frio extremo</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='font-semibold'>S/80</p>
                <p className='line-through opacity-50'>S/800</p>
                <p className='text-green-600 font-semibold'>90% off</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
