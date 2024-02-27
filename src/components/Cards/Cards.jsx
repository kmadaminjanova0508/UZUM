import './Cards.css'
import img1 from '../../assets/Product1.jpg'
import img2 from '../../assets/product2.jpg'
import img3 from '../../assets/product3.jpg'
import img4 from '../../assets/product4.jpg'
import img5 from '../../assets/product5.jpg'
import img6 from '../../assets/product6.jpg'
import img7 from '../../assets/product7.jpg'
import img8 from '../../assets/product8.jpg'
import img9 from '../../assets/product9.jpg'
import img10 from '../../assets/product10.webp'
import img11 from '../../assets/product11.webp'
import img12 from '../../assets/product12.jpg'
import img13 from '../../assets/product13.webp'
import img14 from '../../assets/product14.jpg'
import img15 from '../../assets/product15.jpg'


const Cards = () => {
  
  return (
    
    <div className="text-center p-10">
  <h1 className="font-bold text-3xl mb-4">Xит продаж 🔥</h1>
  <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img6} alt="Product" className="h-80 w-72  rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img5} alt="Product" className="h-80 w-72  rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img4} alt="Product" className="h-80 w-72  rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img15} alt="Product" className="h-80 w-72 rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img2} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img1} alt="Product" className="h-80 w-72  rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img10} alt="Product" className="h-80 w-72 rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img8} alt="Product" className="h-80 w-72  rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img9} alt="Product" className="h-80 w-72  rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img7} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img12} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img11} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img4} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img13} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img14} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img1} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img2} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img5} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img3} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img12} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img11} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img10} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img10} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img3} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img1} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img10} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img3} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img7} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img12} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img11} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img15} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src={img12} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
      <div className="px-4 py-3 w-72">
        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
        <p className="text-lg font-bold text-black truncate block capitalize">Product Name</p>
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"  viewBox="0 0 16 16">
              <path  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div>
  </section>
</div>


  )
}

export default Cards