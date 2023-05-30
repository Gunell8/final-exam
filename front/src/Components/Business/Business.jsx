import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { Carousel } from "../Carousel/Carousel";
export const Business = () => {
    return (
        <>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <Carousel img="https://preview.colorlib.com/theme/onepro/img/slider/slide-1.jpg.webp" name1="WE ARE" name2="BUSINESS THEME CREATOR" title="At vero eos et accusamus iusto odio dignissimos ducmus qui
                blanditiis praesentium voluptatum deleniti" />
            </SwiperSlide>
            <SwiperSlide>
                <Carousel img="https://preview.colorlib.com/theme/onepro/img/slider/slide_1.jpg" name1="WE ARE" name2="BUSINESS THEME CREATOR" title="At vero eos et accusamus iusto odio dignissimos ducmus qui
                blanditiis praesentium voluptatum deleniti" />
            </SwiperSlide>
          </Swiper>
        </>
      );
    }
