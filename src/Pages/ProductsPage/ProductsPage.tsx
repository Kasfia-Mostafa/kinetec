import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "../../utils/Loader";
import ProductCard from "./ProductCard";
import { useState } from "react";
import Pagination from "@/utils/Pagination";
import { TProducts } from "@/Types/ProductsTypes";

// import Pagination from "@/utils/Pagination";

function ProductsPage() {
  // Hooks should be called unconditionally
  const { data, isLoading } = useGetProductsQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  // Early return for loading state
  if (isLoading) {
    return <Loader />;
  }

  // Data destructuring
  const products = data?.data || [];

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="grid place-content-center">
      <div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-14 mx-auto my-5">
          {currentPosts.map((product: TProducts) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
        <div className="pt-10">
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
