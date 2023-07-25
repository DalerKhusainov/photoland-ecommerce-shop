// SWIPER REACT COMPONENT
import { Swiper, SwiperSlide } from "swiper/react";

// REQUIRED SWIPER MODULES
import { Pagination, Navigation } from "swiper";

// SWIPER STYLES
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

// COMPONENTS
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      naviagation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{ clickable: true }}
      navigation={{ clickable: false }}
      className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
    >
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
