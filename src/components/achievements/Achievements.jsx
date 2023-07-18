import React from 'react'
import './achievements.css'
import PIC1 from '../../assets/pic1.jpg'
import PIC2 from "../../assets/pic2.jpg";
import PIC3 from "../../assets/pic3.png";
import PIC4 from "../../assets/pic4.jpg";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';

const data = [
  {
    image: PIC1,
    title: "Highest CGPA",
    review:
      "Have maintained a CGPA of 9.89 after four semesters with 10 SGPA in both second and third semesters. This is the highest in entire Computer Science 2025 batch.",
  },
  {
    image: PIC2,
    title: "Second Prize in Hackathon",
    review:
      "Secured second prize in HACKADROIT 24-hour hackathon organized by IEEE PEC. Created a cloud application which stores user data in homomorphically encrypted form.",
  },
  {
    image: PIC3,
    title: "1000+ Problems on Leetcode",
    review:
      "Solved over 1000 problems on Leetcode in the past year involving multiple concepts such as data structures, algorithms, math and design in C++ and Python languages.",
  },
  {
    image: PIC4,
    title: "JEE Main and Advanced",
    review:
      "Secured 99.73 percentile (3078 rank) in JEE Main 2021 among more than a million appearing candidates. Also got rank 4218 in JEE Advanced 2021 among more than 250,000+ candidates.",
  }
];

const Achievements = () => {
  return (
    <section id="achievements">
      <h5>A Few Noteworthy Feats</h5>
      <h2>My Achievements</h2>
      <Swiper
        className="container achievement_container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map(({ image, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="achievement">
              <div className="achievement-image">
                <img src={image} alt="achievement" />
              </div>
              <h5 className="achievement_name">{title}</h5>
              <small className="achievement_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Achievements