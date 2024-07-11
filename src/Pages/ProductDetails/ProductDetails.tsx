import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import Loader from "../../utils/Loader";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(id);
  //   console.log(data.data.name);

  if (isLoading) return <Loader></Loader>;

  const product = data.data;

  return (
    <div>
      <div className="flex flex-col items-center justify-center md:flex-row ">
        <div className="group relative sm:w-[350px] px-10 lg:px-0 md:px-0">
          <img
            width={350}
            height={350}
            className="h-full w-full scale-105 transform  rounded-lg bg-black/70"
            src={product?.image}
            alt="card"
          />
        </div>
        <div className="min-w-[250px] max-w-[450px] border-l-4 border-yellow-400 bg-slate-50 space-y-12 rounded-br-lg rounded-tr-lg p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]  md:w-[350px]">
          <div className="space-y-1">
            <h2 className="text-center text-3xl font-medium text-gray-700 lg:text-4xl">
              {product?.name}
            </h2>
            <p className="text-gray-500 text-xl"> {product?.category}</p>
          </div>
          <div>
            <p>{product?.description}</p>
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-white/70">
                Quantity
              </p>
              <p className="text-2xl tracking-wider text-gray-600 dark:text-white/80 lg:text-3xl">
                {product?.quantity}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-white/70">Rating</p>
              <p className="text-2xl tracking-wider text-gray-600 dark:text-white/80 lg:text-3xl">
                {product?.rating}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-white/70">Price</p>
              <p className="text-2xl tracking-wider text-gray-600 dark:text-white/80 lg:text-3xl">
                {product?.price}
              </p>
            </div>
          </div>
          <div>
            <button className="rounded-full text-yellow-500 font-semibold border border-yellow-400 px-4 py-2 text-sm text-yellow400 hover:bg-yellow-400 hover:text-white  duration-300 ">
              Bye now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
