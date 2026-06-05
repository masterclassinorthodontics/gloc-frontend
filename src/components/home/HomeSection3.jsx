"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HomeSection3() {
  const images = [
    "/images/gallery/img1.jpg",
    "/images/gallery/img2.jpg",
    "/images/gallery/img3.jpg",
    "/images/gallery/img4.jpg",
    "/images/gallery/img5.jpg",
    "/images/gallery/img6.jpg",
    "/images/gallery/img7.jpg",
    "/images/gallery/img8.jpg",
    "/images/gallery/img9.jpg",
    "/images/gallery/img10.jpg",
    "/images/gallery/img11.jpg",
    "/images/gallery/img12.jpg",
    "/images/gallery/img13.jpg",
    "/images/gallery/img14.jpg",
    "/images/gallery/img15.jpg",
    "/images/gallery/img16.jpg",
    "/images/gallery/img17.jpg",
    "/images/gallery/img18.jpg",
    "/images/gallery/img19.jpg",
    "/images/gallery/img20.jpg",
    "/images/gallery/img21.jpg",
    "/images/gallery/img22.jpg",
    "/images/gallery/img23.jpg",
    "/images/gallery/img24.jpg",
    "/images/gallery/img25.jpg",
  ];

  return (
    <section
      className="
        relative
        py-20
        bg-fixed
        bg-center
        bg-cover
      "
      style={{
        backgroundImage: "url('https://greatlakesdentalclinics.com/wp-content/uploads/2023/04/IMG-2111a.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">

        <h2 className="text-center text-white text-4xl font-bold mb-12">
          Our Clinical Gallery
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-110
                  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}