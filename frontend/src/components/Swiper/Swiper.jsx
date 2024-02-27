import './Swiper.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/Sliderimg_2.jpeg'


import  Img3 from '../../assets/Slider_img3.jpeg';
import  Img4 from '../../assets/slider_img4.jpeg'
import  Img5 from '../../assets/slider_5.jpeg'
import  Img6 from '../../assets/slider7.jpeg'
import  Img7 from '../../assets/slider8.jpeg'
import  Img8 from '../../assets/slider9.jpeg'
import  Img9 from '../../assets/slider10.jpeg'



import 'swiper/css';
import 'swiper/css/pagination';




import {  Autoplay, } from 'swiper/modules';




export default function App() {
  return (
    <>
    
      <Swiper
       
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[ Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Img9} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
