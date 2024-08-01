/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateProductMutation } from "@/redux/api/baseApi";
import { useEffect, useState } from "react";
import { ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductManagement = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    quantity: "",
    rating: "",
    description: "",
    category: "",
  });
  const navigate = useNavigate();
  const [
    createProduct,
    { isLoading, isError: addError, isSuccess: addSuccess },
  ] = useCreateProductMutation();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productToSubmit = {
      ...product,
      price: parseFloat(product.price),
      rating: parseFloat(product.rating),
      quantity: parseInt(product.quantity, 10),
    };

    try {
      const result = await createProduct(productToSubmit).unwrap();
      console.log("Product added successfully:", result);
      setProduct({
        name: "",
        image: "",
        price: "",
        quantity: "",
        rating: "",
        description: "",
        category: "",
      });
      navigate("/productManagement");
    } catch (err) {
      console.error("Failed to save the product:", err);

      // Enhanced error handling
      if (err instanceof Error) {
        console.error("Error message:", err.message);
      } else {
        console.error("An unknown error occurred:", err);
      }

      // Additional checks based on the structure of the error
      if (err && typeof err === "object") {
        if ("data" in err) {
          console.error("Server response:", (err as any).data);
        }
        if ("status" in err) {
          console.error("Status code:", (err as any).status);
        }
      }
    }
  };

  useEffect(() => {
    if (addError) {
      toast.error("Failed to add the product");
    } else if (addSuccess) {
      toast.success("Product has been add successfully");
    }
  }, [addError, addSuccess]);

  return (
    <div className="mx-3">
      <div className="flex justify-center">
        <div className="w-[600px] space-y-6 rounded-lg border bg-white p-10 shadow-lg">
          <div className="flex flex-col space-y-1">
            <h3 className="text-3xl font-bold tracking-tight">
              Add New Product
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Please fill in the form to add a new product.
            </p>
          </div>
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="name"
                >
                  Product Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="name"
                  placeholder="Enter product name"
                  name="name"
                  type="text"
                  value={product.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="image"
                  placeholder="Enter image URL"
                  name="image"
                  type="text"
                  value={product.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="price"
                  placeholder="Enter product price"
                  name="price"
                  type="number"
                  step="0.01"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="quantity"
                  placeholder="Enter quantity"
                  name="quantity"
                  type="number"
                  value={product.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="rating"
                  placeholder="Enter rating (0-5)"
                  name="rating"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={product.rating}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="flex h-20 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="description"
                  placeholder="Enter product description"
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 text-sm">
                <label
                  className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300"
                  htmlFor="category"
                >
                  Category
                </label>
                <input
                  className="flex h-10 w-full rounded-md border px-3 py-2 focus-visible:outline-none dark:border-zinc-700"
                  id="category"
                  placeholder="Enter product category"
                  name="category"
                  type="text"
                  value={product.category}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="rounded-md bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600 "
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
