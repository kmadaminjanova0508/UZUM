import React from 'react'
import img from '../../assets/shoppingbag.png'

export default function ShopModal ({ visible, onClose}) {
    const handleOnClose = (e) => {
        if(e.target.id === "modal") onClose();

    };

    if (!visible) return null;
  return (
    <div   
    id = 'modal'
    onClick={handleOnClose}
    className='fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex z-50'>
        <div className='bg-white p-2 rounded w-[500px]  '>
        <div className='md:flex-1  divide-y divide-gray-400'>
        <div className='flex items-start'>
        <h2 className=" leading-tight tracking-tight font-midium text-gray-800 text-xl md:text-xl py-5 px-3 ">Корзина(0)</h2> 
        <button onClick={onClose} className='px-[330px] py-5'>x</button>

        </div>
        <div class='w-full h-full flex justify-center items-center pt-[400px] gap-2'>
            <img src={img} className='w-6' alt="" />
    <h2>Ваша корзина пуста</h2>
      </div>

        </div>

        </div>
        </div>

  )
}
