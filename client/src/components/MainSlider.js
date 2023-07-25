// SWIPER REACT COMPONENT
import { Swiper, SwiperSlide } from "swiper/react";

// REQUIRED SWIPER MODULES
import { Pagination, Autoplay } from "swiper";

// SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../slider.css";

// IMAGES
import CameraImg from "../img/camera.png";

// DATA
const sliderData = [
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: CameraImg,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      className="h-full mainSlider bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                {/* TEXT */}
                <div className="w-full lg:flex-1">
                  <div className="mb-1 text-center uppercase lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <button className="mx-auto btn btn-accent lg:mx-0">
                    Shop now
                  </button>
                </div>
                {/* IMG */}
                <div className="flex-1">
                  <img
                    className="xl:absolute xl:-right-16 xl:-bottom-12"
                    src={slide.img}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;
