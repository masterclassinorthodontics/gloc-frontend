"use client";
import { motion } from "framer-motion";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FaTimes, FaDownload, FaShareAlt } from "react-icons/fa";

import "swiper/css";

export default function Achieveawards() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate1.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate2.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate3A.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate4A.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate9-1.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate4.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate5.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate6.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate7.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate8.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate10.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate11.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate12.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate13.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate14.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate15.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate16.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate17.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate18.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate19.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate20.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate21.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate22-1.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate24-1.png",
    "https://lightslategray-lemur-726893.hostingersite.com/gallery/Certificate25-1.png",
  ];

  const handleShare = async (image) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Achievement & Award",
          text: "Check this certificate",
          url: image,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      navigator.clipboard.writeText(image);
      alert("Image link copied to clipboard");
    }
  };

  return (
    <>
      <section
        className="relative py-20 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://greatlakesdentalclinics.com/wp-content/uploads/2023/04/IMG-2111a.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <motion.div className="relative z-10 max-w-[1800px] mx-auto px-6"
        initial={{y:280}}
        whileInView={{y:0}}
        viewport={{once:true, amount:0.2}}
        transition={{
          duration: 0.8,
          ease:"easeIn",
        }}
        >
          <h2 className="text-center text-white text-4xl font-bold mb-6">
            Achievements & Awards
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>

        <div className="relative px-4">
          <Swiper
          className="awards-swiper"
            modules={[Autoplay, Navigation]}
            navigation={true}
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
              1025: {
                slidesPerView: 4,
              },
            }}
          >
            
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setSelectedImage(image)}
                  className="
  relative
  h-[400px]
  xl:h-[500px]
  overflow-hidden
  rounded-lg
  cursor-pointer
  transition-all
  duration-300
  hover:scale-105
"
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </motion.div>
      </section>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-[9999]
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* Top Right Controls */}
          <div className="fixed top-6 right-6 flex items-center gap-3 z-[10000]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleShare(selectedImage);
              }}
              className="
                bg-[#00A1D4]
                text-white
                p-3
                rounded-full
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaShareAlt size={18} />
            </button>

            <a
              href={selectedImage}
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="
                bg-[#00A1D4]
                text-white
                p-3
                rounded-full
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaDownload size={18} />
            </a>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="
                bg-red-500
                text-white
                p-3
                rounded-full
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Image Container */}
          <div
            className="
              relative
              w-full
              max-w-7xl
              h-[85vh]
              animate-[zoomIn_0.3s_ease]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Certificate"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}