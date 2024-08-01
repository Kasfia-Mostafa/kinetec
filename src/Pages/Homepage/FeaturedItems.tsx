import { useGetProductsQuery } from "@/redux/api/baseApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { TProducts } from "@/Types/ProductsTypes";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeaturedItems = () => {
  const { data } = useGetProductsQuery({});
  const products = data?.data || [];

  return (
    <div>
      <div className="flex justify-center flex-col h-[800px]">
        <h1 className="text-left underline text-3xl ml-40 mb-8 text-yellow-600 font-bold">
          Featured
        </h1>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%]"
        >
          {products.slice(0, 10).map((item: TProducts) => (
            <SwiperSlide key={item._id}>
              <div className="grid gap-6 mb-8 group relative 
              shadow-lg text-white rounded-xl p-6 h-[200px] 
              w-full sm:w-[400px] md:w-[450px] lg:h-[250px] 
              lg:w-[350px] overflow-hidden cursor-pointer">
                <div>
                  <img
                    width={200}
                    height={200}
                    className="absolute inset-0 bg-cover bg-center h-[275px] w-[350px]"
                    src={item?.image}
                    alt=""
                  />
                </div>
                <div
                  className="absolute inset-0 bg-black opacity-10 
                group-hover:opacity-50"
                />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl">{item.name} </h1>
                  <p className="lg:text-[18px]">{item.category} </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to={`/products`}>
          <div className="mr-56 gap-2 flex items-end justify-end text-xl text-yellow-500 font-bold">
            <h1>See more</h1>
            <FaArrowRightLong />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedItems;
