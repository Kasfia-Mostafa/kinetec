import { useCreateProductMutation } from '@/redux/api/baseApi';
import { useState } from 'react';

const ProductManagement = () => {
  const [product, setProduct] = useState({
    name: '',
    image: '',
    price: '',
    quantity: '',
    rating: '',
    description: '',
    category: ''
  });

  const [createProduct, { isLoading, isError, isSuccess, error }] = useCreateProductMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert price and rating to numbers
    const productToSubmit = {
      ...product,
      price: parseFloat(product.price), // Convert price to a number
      rating: parseFloat(product.rating), // Convert rating to a number
      quantity: parseInt(product.quantity, 10), // Convert quantity to an integer
    };

    try {
      const result = await createProduct(productToSubmit).unwrap();
      console.log('Product added successfully:', result);
      setProduct({
        name: '',
        image: '',
        price: '',
        quantity: '',
        rating: '',
        description: '',
        category: ''
      });
    } catch (err) {
      console.error('Failed to save the product:', err);
      // Enhanced error handling
      if (err.data) {
        console.error('Server response:', err.data);
      }
      if (err.status) {
        console.error('Status code:', err.status);
      }
    }
  };

  return (
    <div className='mx-3'>
      <div className="flex justify-center">
        <div className="w-[600px] space-y-6 rounded-lg border bg-white p-10 shadow-lg">
          <div className="flex flex-col space-y-1">
            <h3 className="text-3xl font-bold tracking-tight">Add New Product</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Please fill in the form to add a new product.
            </p>
          </div>
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2 text-sm">
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="name">
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
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="image">
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
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="price">
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
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="quantity">
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
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="rating">
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
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="description">
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
                <label className="text-sm font-medium leading-none text-zinc-700 dark:text-zinc-300" htmlFor="category">
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
                className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
              {isError && <p className="text-red-500">Failed to add the product: {error?.message || 'Unknown error'}</p>}
              {isSuccess && <p className="text-green-500">Product added successfully!</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
