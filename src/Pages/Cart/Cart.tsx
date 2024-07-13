import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeFromCart } from "@/redux/cart/cartSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "@/utils/Button";


const Cart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const notify = () => toast.error("Promo is not available now");

  return (
    <div>
      <div className="mx-16 mt-10 ">
        <div className="sm:flex shadow-md my-10">
          <div className="w-full sm:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Items
              </h2>
            </div>
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50"
              >
                <div className="md:w-4/12 2xl:w-1/4 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-40 object-center object-cover md:block hidden"
                  />
               
                </div>
                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                  <div className="flex items-center justify-between w-full">
                    <p className="text-3xl font-black leading-none text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-base font-black leading-none text-gray-800">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-end pt-5">
                    <p
                      className="text-md font-semibold leading-3 text-red-500 pl-5 cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item._id))}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <Link
              to={`/products`}
              className="flex font-semibold text-yellow-500 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-yellow-500 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>
          <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItems.length}
              </span>
              <span className="font-semibold text-sm">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Free</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full bg-slate-50"
              />
            </div>
            <button
              onClick={notify}
              className="bg-slate-600 hover:bg-slate-700 px-5 py-2 text-sm text-white uppercase"
            >
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-center">
               <Link to={`/payment`}>
               <Button></Button>
               </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
