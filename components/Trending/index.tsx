// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CardThumbnail from '../CardThumbnail';
import { Movie } from '../../interfaces';

function Trending({ movies }: { movies: Movie[] }) {
  return (
    <div className="w-full">

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          (movies || []).slice(0, 5).map((movie) => (
            <SwiperSlide key={movie.id}><CardThumbnail movie={movie} /></SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Trending
