// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CardThumbnail from '../CardThumbnail';
import CardMovie from '../CardMovie';

function Trending() {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><CardThumbnail /></SwiperSlide>
      <SwiperSlide><CardMovie /></SwiperSlide>
      <SwiperSlide><CardThumbnail /></SwiperSlide>
      <SwiperSlide><CardThumbnail /></SwiperSlide>
    </Swiper>
  )
}

export default Trending