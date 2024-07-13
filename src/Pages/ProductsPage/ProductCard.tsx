import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '@/redux/cart/cartSlice';
import { TProducts } from '@/Types/ProductsTypes';
import toast from 'react-hot-toast';
import { RootState } from '@/redux/store';

const ProductCard = ({ product }: { product: TProducts }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    const itemInCart = cartItems.find(item => item._id === product._id);

    if (itemInCart) {
      toast.error('Equipment is already in the cart');
    } else {
      dispatch(addToCart(product));
      toast.success('Equipment added to the cart');
    }
  };

  return (
    <div>
      <div className="max-w-[350px] space-y-4 rounded-lg bg-yellow-100 p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
        <img
          width={200}
          height={200}
          className="h-[275px] w-[350px] rounded-lg object-cover"
          src={product?.image}
          alt={product?.name || 'Product image'}
        />
        <div className="grid gap-2">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-semibold">{product.name}</h1>
              <p className="text-sm text-gray-500 dark:text-white/60">
                {product?.category}
              </p>
            </div>
            <p className="text-lg font-semibold text-yellow-800">${product?.price}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="rounded-lg bg-yellow-500 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-yellow-600 sm:text-sm md:text-base"
          >
            Add to Cart
          </button>
          <button className="rounded-md border border-yellow-700 text-yellow-700 px-4 py-2 duration-300 hover:bg-yellow-200">
            <Link to={`/products/${product?._id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
