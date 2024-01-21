import { LuFileText } from "react-icons/lu";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Pagination, Navigation } from "swiper/modules";
function SliderCard() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="right-section-cards space-y-[13px]">
      <div className="flex justify-between border-b pb-2">
        <div className="flex items-center space-x-[11px]">
          <span className="size-[24px]">
            <LuFileText className="size-full" />
          </span>
          <span>Sürətli Qeydlər</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="size-[24px] rounded-full bg-skyBlue flex items-center justify-center opacity-50"
          >
            <FaAngleLeft className="text-white" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full size-[24px] bg-skyBlue flex items-center justify-center"
          >
            <FaAngleRight className="text-white" />
          </button>
        </div>
      </div>
      <div className="text-xs opacity-60 space-y-6">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
        >
          {[1, 2, 3].map((index) => (
            <SwiperSlide key={index}>
              <div className="space-y-3">
                <p>
                  The price of petrol remained unchanged on July 6 after
                  reaching a new record high on the previous day, according to a
                  price notification by state-owned fuel retailers. The diesel
                  price remained stable for the second consecutive day. The
                  increase on July 5, 35th in two months, took the petrol price
                  in Delhi closer to Rs 100 per litre-mark.
                </p>

                <p>
                  The price of petrol remained unchanged on July 6 after
                  reaching a new record high on the previous day, according to a
                  price notification by state-owned fuel retailers. The diesel
                  price remained stable for the second consecutive day. The
                  increase on July 5, 35th in two months, took the petrol price
                  in Delhi closer to Rs 100 per litre-mark.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default SliderCard;
