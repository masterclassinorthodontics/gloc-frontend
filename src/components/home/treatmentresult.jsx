"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaTimes, FaDownload, FaShareAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import { easeIn } from "framer-motion";

export default function TreatmentResult({
  removeBackground = false,
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile2.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile1.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile15.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile14.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile13.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile12.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile11.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile10.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile9.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile8.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile7.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile6.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile5.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile4.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/smile3.jpg",
  ];

  const handleShare = async (image) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Gallery",
          text: "Check this image",
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
  className={`relative py-20 ${
    !removeBackground
      ? "bg-fixed bg-center bg-cover"
      : ""
  }`}
  style={
    !removeBackground
      ? {
          backgroundImage:
            "url('https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/bg.jpg')",
        }
      : {}
  }
>
        {/* Overlay */}
        {!removeBackground && (
  <div className="absolute inset-0 bg-black/40"></div>
)}

        <motion.div className="relative z-10 w-[95%] mx-auto"
        initial={{y:240}}
        whileInView={{y:0}}
        viewport={{once:true, amount:0.2}}
        transition={{
          duration:0.8,
          easeIn
        }}
        >

          {/* Heading */}
          <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-6">
            Treatment and Results
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>  

          <Swiper
            className="gallery-swiper"
            modules={[Autoplay, Navigation]}
            navigation={true}
            loop={true}
            spaceBetween={20}
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
                    xl:h-[550px]
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

        </motion.div>
      </section>

      {/* Full Screen Popup */}
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
          "
          onClick={() => setSelectedImage(null)}
        >
          {/* Top Right Buttons */}
          <div className="fixed top-6 right-6 flex gap-3 z-[10000]">

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
              "
            >
              <FaTimes size={18} />
            </button>

          </div>

          {/* Enlarged Image */}
          <div
            className="
              relative
              w-full
              max-w-7xl
              h-[85vh]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery Image"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}