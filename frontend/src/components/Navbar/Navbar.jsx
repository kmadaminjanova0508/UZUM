
import './Navbar.css'
import logo_light from '../../assets/logo.png'
import logo_dark from '../../assets/white-bg.png'
import search_light from '../../assets/search-w.png'
import search_dark from '../../assets/search.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import ShopModal  from '../ShopModal/ShopModal'
import { useState } from 'react'



const Navbar = ({ theme , setTheme}) => {


  const [OpenMod, setMod] = useState(false);
  const handleOnClose = () => setMod(false);
  const toggle_mode =()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
        <img  src={theme == 'light' ? logo_light: logo_dark} alt="" className='logo' />
        <ul className='uli'>
            <li>Главная</li>
            <li>Kаталог</li>
            <li>Желания</li>
            <li>Kабинет</li>
            <li onClick={() => setMod(true)}>Корзина</li>
        </ul>
      
      <div className='searchbox'>
        <input type="text" placeholder='Искать товары и категории' />
        <img src={theme == 'light' ? search_light : search_dark}  alt="" />
      </div>

      <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon' />
      

<ShopModal onClose={handleOnClose} visible={OpenMod} />
        </div>
  )
}

export default Navbar