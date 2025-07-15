import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// GallerySlider component to display a slider of images
export default function GallerySlider({ images = [] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={16}
      loop
      freeMode
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={6000}
      className="gallery-slider"
    >
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img src={src} alt={`Gallery ${idx + 1}`} loading="lazy" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
