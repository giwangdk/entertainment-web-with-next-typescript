// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CardThumbnail from '../CardThumbnail';
import CardMovie from '../CardMovie';

function Trending() {
  return (
    <div className="w-full">

    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><CardThumbnail /></SwiperSlide>
      <SwiperSlide><CardThumbnail /></SwiperSlide>
      <SwiperSlide><CardThumbnail /></SwiperSlide>

      <SwiperSlide><CardThumbnail /></SwiperSlide>
      <SwiperSlide><CardThumbnail /></SwiperSlide>
      <SwiperSlide><CardThumbnail /></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Trending