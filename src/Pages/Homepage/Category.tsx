import { CgGym } from "react-icons/cg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProducts } from "@/Types/ProductsTypes";

const Category = () => {
  const { data, isLoading, isError } = useGetProductsQuery("");
  
  // Ensure correct typing for the data
  const products: TProducts[] = data?.data || [];
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading categories.</div>;

  // Extract unique categories from the products data
  const categories: string[] = [...new Set(products.map((product) => product.category))];

  return (
    <div className="my-80 grid place-content-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category: string, index: number) => (
          <div key={index} onClick={() => handleCategoryClick(category)}>
            <div className="cursor-pointer border-t-4 border-yellow-300 transition-all duration-500 hover:translate-y-2 w-72 h-40 bg-slate-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-4 px-4">
              <div className="flex gap-3">
                <CgGym className="text-5xl text-yellow-500" />
                <div>
                  <span className="font-bold text-yellow-600 text-xl">
                    {category}
                  </span>
                  <div className="flex items-center gap-3">
                    <p className="line-clamp-3 text-slate-600">See more</p>
                    <FaArrowRightLong className="mt-1 text-slate-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
