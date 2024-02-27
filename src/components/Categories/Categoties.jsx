import './Categories.css';
import rasrochka from '../../assets/rasrochka_1.png'
import sales from '../../assets/sales.png'
import winter from '../../assets/winteer.png'
import prize from '../../assets/padarki_1.png'


const Categoties = () => {
  return (
    <div className='categories'>
        <ul className='list'>
            <li>
                <img  src={rasrochka} alt="" className='cat1' />
                <a href='#' >Рассрочкa</a>
            </li>
            <li>
                <img  src={sales} alt="" className='cat1' />
                <a  href= '#' >Cекретная подборка</a>
            </li>
            <li>
                <img src={winter} alt="" className='cat1' />
                <a href='#' >Зимняя распродажа</a>
            </li>
            <li>
                <img src={prize} alt="" className='cat1' />
                <a  href= '#'>Подарки для него</a>
            </li>
            <ul className="header-nav-list">
                <li><a href="#">Электроника</a></li>
                <li><a href="#">Бытовая техника</a></li>
                <li><a href="#">Одежда</a></li>
                <li><a href="#">Аксессуары</a></li>
            </ul>
              
            
        </ul>
       
    </div>
  )
}

export default Categoties;