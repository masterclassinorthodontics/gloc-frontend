"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "The dentists and staff of Orthodontics are very warm, friendly yet extremely professional. I am no more afraid of going to the dentist. I, first, went to Orthodontics with advanced Periodontitis. The care, with which they treated me, really impressed me.",
      name: "MUKESH AGGARAWAL",
    },
    {
      text: "The dentists and staff of Orthodontics are very warm, friendly yet extremely professional. I am no more afraid of going to the dentist. I, first, went to Orthodontics with advanced Periodontitis. The care, with which they treated me, really impressed me.",
      name: "TRINA",
    },
    {
      text: "The entire staff of Orthodontics is very friendly yet extremely professional. The doctors are highly qualified and expert. We are beyond satisfied with the staff.",
      name: "AMIT BHADURI",
    },
    {
      text: "I am a patient of this dental care for last several years. Orthodontics has all the latest procedures and techniques.",
      name: "AMRITA ROY",
    },
    {
      text: "Thank you so much for the wonderful; treatment and valuable oral care advices.",
      name:"TRIPTI BASU",
    },
  ];

  return (
    <section
      className="relative py-10 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://lightslategray-lemur-726893.hostingersite.com/bg-imgs/testimonial-bg.jpg')",
      }}
    >
      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-[#00A1D4]/70"></div>

      <motion.div className="relative z-10 max-w-6xl mx-auto px-4"
      initial={{y:260}}
      whileInView={{y:0}}
      viewport={{once:true, amount:0.2}}
      transition={{
        duration:0.8,
        ease:"easeIn"
      }}
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-white text-4xl md:text-5xl font-bold">
            Testimonials
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>
        </div>

        
        {/* Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-4xl mx-auto text-center min-h-[350px] flex flex-col justify-center">
                <p className="text-white text-lg md:text-2xl leading-relaxed">
                  {item.text}
                </p>

                <h4 className="mt-8 text-white text-2xl font-bold italic">
                  {item.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}