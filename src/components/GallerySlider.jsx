import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function GallerySlider({ images }) {
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
        <SwiperSlide key={idx} style={{ width: "240px" }}>
          <img
            src={src}
            alt={`Gallery ${idx + 1}`}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
