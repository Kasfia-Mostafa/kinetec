import { useGetProductsQuery } from "@/redux/api/baseApi";
import Loader from "../../utils/Loader";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import Pagination from "@/utils/Pagination";
import { TProducts } from "@/Types/ProductsTypes";
import { useSearchParams } from "react-router-dom";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  const { data, isLoading, isError } = useGetProductsQuery(category);
  const products: TProducts[] = data?.data || [];

  const [searchedItems, setSearchedItems] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(12);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState<TProducts[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filters: string[] = ["Strength Training", "Cardio Equipment", "Yoga & Pilates"];

  useEffect(() => {
    filterItems();
  }, [selectedFilters, products, searchedItems, sortOrder, category]);

  const filterItems = () => {
    let tempItems = [...products];

    if (category) {
      tempItems = tempItems.filter(product => product.category === category);
    }

    if (selectedFilters.length > 0) {
      tempItems = tempItems.filter(product => selectedFilters.includes(product.category));
    }

    if (searchedItems) {
      tempItems = tempItems.filter(product => product.name.toLowerCase().includes(searchedItems.toLowerCase()));
    }

    tempItems.sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);

    setFilteredItems(tempItems);
  };

  const handleFilterChange = (selectedCategory: string) => {
    setSelectedFilters(prevFilters =>
      prevFilters.includes(selectedCategory)
        ? prevFilters.filter(el => el !== selectedCategory)
        : [...prevFilters, selectedCategory]
    );
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setSearchedItems("");
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredItems.slice(firstPostIndex, lastPostIndex);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }

  return (
    <section>
      <div className="grid grid-flow-col">
        <div className="col-span-1 mb-10">
          <div className="ml-6 lg:ml-10 mb-10">
            <form>
              <div className="relative mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none rounded-2xl">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  aria-label="Search products"
                  className="block w-48 lg:w-60 p-4 pl-10 text-sm text-gray-900 border bg-white border-gray-300 rounded-xl"
                  placeholder="Search equipment..."
                  required
                  onChange={(event) => setSearchedItems(event.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="mb-16 lg:ml-10 ml-6">
            <select
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="p-2 w-48 lg:w-60 bg-white text-slate-600 border border-gray-300 rounded-xl"
              aria-label="Sort by price"
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>

          {/* Category Filters */}
          <div className="grid place-content-center lg:ml-6">
            <div>
              <h1 className="font-bold text-lg text-yellow-500 w-40 lg:w-60 rounded mb-2">
                Category
              </h1>
              <div className="buttons-container">
                {filters.map((filter, idx) => (
                  <div key={`filters-${idx}`} className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id={`filter-${idx}`}
                      value={filter}
                      checked={selectedFilters.includes(filter)}
                      onChange={() => handleFilterChange(filter)}
                      className="form-checkbox text-yellow-500 shrink-0 mt-0.5 border-gray-200 rounded focus:ring-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                    />
                    <label
                      htmlFor={`filter-${idx}`}
                      className="ml-2 text-md font-semibold text-slate-700 shrink-0 mt-0.5 border-gray-200 rounded focus:ring-yellow-600 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      {filter}
                    </label>
                  </div>
                ))}
              </div>
              <button
                onClick={handleClearFilters}
                className="mt-5 w-full border-2 border-yellow-500 text-yellow-500 font-semibold rounded"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Products Cards */}
        <div className="grid place-content-center col-span-3">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14 mx-4 my-5">
            {currentPosts.map((product: TProducts) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Pagination
          totalPosts={filteredItems.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default ProductsPage;
