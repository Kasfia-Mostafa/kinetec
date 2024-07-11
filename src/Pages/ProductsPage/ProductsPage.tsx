import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "../../utils/Loader";
import ProductCard from "./ProductCard";
import { TProducts } from "@/Types/ProductsTypes";
import { useState } from "react";
import { CardPagination } from "@/utils/Pagination";
// import Pagination from "@/utils/Pagination";

function ProductsPage() {
  // Hooks should be called unconditionally
  const { data, isLoading } = useGetProductsQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  // Early return for loading state
  if (isLoading) {
    return <Loader />;
  }

  // Data destructuring
  const products = data?.data || [];

  // Pagination calculations
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="grid place-content-center">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14 mx-auto my-5">
        {currentPosts.map((product: TProducts) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
        <div className="w-full flex justify-center mt-4">
          <CardPagination currentPosts={currentPosts} />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
