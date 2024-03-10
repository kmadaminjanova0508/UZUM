import React from 'react'


export  default function Modal({visible, onClose}) {
    const handleOnClose = (e) => {
        if(e.target.id === "modal") onClose();

    };


     if(!visible) return null;

  return (
    <div
    id = 'modal'
    onClick={handleOnClose} className='fixed inset-0  bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center  z-50'>
    <div className='bg-white dark:bg-gray-700  p-2 rounded'>
   <div className="bg-gray-100 py-8 dark:bg-gray-800">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="mx-4 flex flex-col md:flex-row">
      <div className="px-4 md:flex-1">
        <div className="mb-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 ">
          <img className=" h-full w-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image" />
        </div>
    
      </div>
      <div className="px-4 md:flex-1 flex items-start">
       <div className="md:flex-1 ">
        <div className='flex items-start'>
        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl dark:text-white">Lorem ipsum dolor, sit amet consectetur, adipisicing elit.</h2> 
        <button onClick={onClose} className='dark:text-white'>x</button>
        </div>
        <p className="text-gray-500 text-sm">От: <a href="#" className="text-indigo-600 hover:underline">Компании АВС</a></p>

        <div className="flex items-center  my-4">
          <div>
            <div className="rounded-lg bg-gray-300 flex px-2 py-2 ">
              <span className="text-indigo-400 mr-2 mt-1">$</span>
              <span className="font-bold text-indigo-600 text-3xl">25</span>
            </div>
          </div>
          <div className="px-3">
            <p className="text-green-500 text-xl font-semibold">Сэкономьте 12%</p>
            <p className="text-gray-400 text-sm">С учетом всех налогов.</p>
          </div>
        </div>

        <p className="text-gray-500 ">Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est.</p>
           <div className="py-3">
            <span className="font-bold text-gray-700 dark:text-gray-300">Наличие:</span>
            <span className="text-gray-600 dark:text-gray-300">В наличии</span>
          </div>
          <div className="mb-4">
          <span class="font-bold text-gray-700 dark:text-gray-300">Выберите цвет:</span>
          <div class="mt-2 flex items-center">
            <button class="mr-2 h-6 w-6 rounded-full bg-gray-800 dark:bg-gray-200"></button>
            <button class="mr-2 h-6 w-6 rounded-full bg-red-500 dark:bg-red-700"></button>
            <button class="mr-2 h-6 w-6 rounded-full bg-blue-500 dark:bg-blue-700"></button>
            <button class="mr-2 h-6 w-6 rounded-full bg-yellow-500 dark:bg-yellow-700"></button>
          </div>
        </div>
         <div className="mb-4">
          <span class="font-bold text-gray-700 dark:text-gray-300">Выберите размер:</span>
          <div class="mt-2 flex items-center">
            <button class="mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">S</button>
            <button class="mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">M</button>
            <button class="mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">L</button>
            <button class="mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">XL</button>
            <button class="mr-2 rounded-full bg-gray-300 px-4 py-2 font-bold text-gray-700 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">XXL</button>
          </div>
        </div>

        <div className="flex py-4 space-x-4">
          <div className="relative">
            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Кoл.</div>
            <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>

          <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white">
       В корзину
       </button>
        </div>
      </div>
    </div>
       
        </div>
    
      
      </div>
    </div>
  </div>
</div>

   
  )
}
