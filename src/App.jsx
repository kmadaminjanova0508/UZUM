import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';
import Swiper from './components/Swiper/Swiper';
import Categoties from './components/Categories/Categoties'
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';




function App() {
 const [data , setData] = useState([])
 const [theme,setTheme] = useState('light');
  useEffect(()=> {
  async function fetchData() {
    console.log(import.meta.env.VITE_API_URL)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}products`);
      if (!response.ok){
      throw new Error ('Network error was not ok');
      }
      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

   fetchData();
  }, []);
 


  return (
    <div className={`containerr ${theme}`}>
      <Navbar theme = {theme} setTheme={setTheme} />
      <Swiper/>
      <Categoties/>
    
      <Cards/>
  
     <Footer/>
    </div>
  )
}

export default App
