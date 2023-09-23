import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import slide_image_1 from './images/Saree.jpg';
import slide_image_2 from './images/Saree.jpg';
import slide_image_3 from './images/Saree.jpg';
import slide_image_4 from './images/Saree.jpg';
import slide_image_5 from './images/Saree.jpg';
import slide_image_6 from './images/Saree.jpg';
import slide_image_7 from './images/Saree.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
function Slider() {

const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="heading">Products</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img onClick={()=> navigate('/products')} src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=> navigate('/products')} src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=> navigate('/products')} src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=> navigate('/products')} src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=> navigate('/products')} src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img onClick={()=> navigate('/products')} src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBackIcon/>
          </div>
          <div className="swiper-button-next slider-arrow">
          <ArrowForwardIcon/>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;