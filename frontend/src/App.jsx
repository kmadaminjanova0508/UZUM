import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar';


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
    <div className={`container ${theme}`}>
      <Navbar theme = {theme} setTheme={setTheme} />
    </div>
  )
}

export default App
