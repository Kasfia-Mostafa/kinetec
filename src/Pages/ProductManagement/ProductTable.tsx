import { useState, useEffect } from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "@/redux/api/baseApi";
import { TProducts } from "@/Types/ProductsTypes";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const { data } = useGetProductsQuery({});
  const products = data?.data || [];
  const [productList, setProductList] = useState(products);
  const [deleteProduct] = useDeleteProductMutation();
  const [
    updateProduct,
    {
      isLoading: isUpdating,
      isError: updateError,
      isSuccess: updateSuccess,
      error: updateErrorDetail,
    },
  ] = useUpdateProductMutation();

  const [editProduct, setEditProduct] = useState<TProducts | null>(null); // State for the product being edited

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id).unwrap();
      setProductList(productList.filter((product:TProducts) => product._id !== id));
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };

  const handleUpdate = (product: TProducts) => {
    setEditProduct(product);
  };

  const handleUpdateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editProduct) return;

    try {
      await updateProduct({
        id: editProduct._id,
        ...editProduct,
      }).unwrap();
      console.log("Product updated successfully");
      setProductList(
        productList.map((product:TProducts) =>
          product._id === editProduct._id ? editProduct : product
        )
      );
      setEditProduct(null);
    } catch (err) {
      console.error("Failed to update the product:", err);
      // Enhanced error handling
      if (err instanceof Error) {
        console.error("Error message:", err.message);
      } else if (typeof err === 'object' && err !== null) {
        // Handle cases where error is an object
        if ('data' in err) {
          console.error("Server response:", (err as any).data);
        }
        if ('status' in err) {
          console.error("Status code:", (err as any).status);
        }
      } else {
        console.error("An unknown error occurred:", err);
      }
    }
  };

  return (
    <div>
      <div className="ml-20">
        <Link to={`/newProduct`}>
          <button
            className="relative h-10 w-44 origin-top transform rounded-lg border-2 border-yellow-500 text-md text-yellow-500 before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-white hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-yellow-500"
          >
            Add new product
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6 ">
          <thead>
            <tr className="bg-yellow-500 text-white">
              <th className="py-4 px-6 text-md text-left border-b">
                Product Image
              </th>
              <th className="py-4 px-6 text-md text-left border-b">
                Product Name
              </th>
              <th className="py-4 px-6 text-md text-left border-b">Category</th>
              <th className="py-4 px-6 text-md text-left border-b">Price</th>
              <th className="py-4 px-6 text-md border-b text-end">Update</th>
              <th className="py-4 px-6 text-md border-b text-end">Delete</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product: TProducts) => (
              <tr
                key={product._id}
                className="hover:bg-gray-50 border-b transition duration-300"
              >
                <td className="py-4 px-4 flex justify-start">
                  <img
                    src={product?.image}
                    alt="product"
                    className="h-16 w-16 object-cover bg-gray-300"
                  />
                </td>
                <td className="py-4 px-6 border-b text-md font-medium">
                  {product?.name}
                </td>
                <td className="py-4 px-6 border-b text-md font-medium">
                  {product?.category}
                </td>
                <td className="py-4 px-6 border-b text-md font-medium">
                  ${product?.price}
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    className="bg-green-400 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                    onClick={() => handleUpdate(product)}
                  >
                    <FaRegEdit />
                  </button>
                </td>
                <td className="py-4 px-6 border-b text-end">
                  <button
                    className="bg-red-600 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"
                    onClick={() => handleDelete(product._id)}
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-md w-[600px]">
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
              Edit Product
            </h2>
            <form onSubmit={handleUpdateSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Product Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 h-8 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.name}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Image URL
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 h-8 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.image}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, image: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Price
                </label>
                <input
                  type="number"
                  step="0.01"
                  className="mt-1 p-2 h-8 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.price}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      price: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Quantity
                </label>
                <input
                  type="number"
                  className="mt-1 p-2 h-8 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.quantity}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      quantity: parseInt(e.target.value, 10),
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Rating
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  className="mt-1 p-2 h-8 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.rating}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      rating: parseFloat(e.target.value),
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Description
                </label>
                <textarea
                  className="mt-1 p-2 h-28 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.description}
                  onChange={(e) =>
                    setEditProduct({
                      ...editProduct,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-500">
                  Category
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 h-8 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  value={editProduct.category}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, category: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600"
                  disabled={isUpdating}
                >
                  {isUpdating ? "Updating..." : "Update Product"}
                </button>
              </div>
              {updateError && (
                <p className="text-red-500 mt-2">
                  Failed to update the product:{" "}
                  {updateErrorDetail instanceof Error
                    ? updateErrorDetail.message
                    : "Unknown error"}
                </p>
              )}
              {updateSuccess && (
                <p className="text-green-500 mt-2">
                  Product updated successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTable;
