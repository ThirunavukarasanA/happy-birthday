import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "../Assets/css/swiper.css";
import camera from "../Assets/image/camera.jpg";
export default function VideoSection() {
  return (
    <div>
      <div className="container mx-auto 2xl:px-10 xl:px-7 lg:px-0 lge:px-7 md:px-4 mdsm:px-4 sm:px-5">
        <p className="2xl:text-[56px] xl:text-[56px] lg:text-[56px] lge:text-[56px] md:text-[50px] mdsm:text-[40px] sm:text-[30px] text-iphone font-semibold sm:px-1 leading-tight pb-10">
          Get to know iPhone.
        </p>
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1.3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3.3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <img src={camera} className="rounded-3xl w-full" />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="">
          <Swiper
            modules={[Navigation, Mousewheel]}
            direction={"horizontal"}
            navigation={true}
            spaceBetween={20}
            mousewheel={true}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="">
                <img
                  src={camera}
                  alt="Slide 1"
                  className="w-full h-[600px] object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={camera}
                  alt="Slide 2"
                  className="w-full h-[600px] object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={camera}
                  alt="Slide 3"
                  className="w-full h-[600px] object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={camera}
                  alt="Slide 4"
                  className="w-full h-[600px] object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src={camera}
                  alt="Slide 5"
                  className="w-full h-[600px] object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div> */}
      </div>
    </div>
  );
}