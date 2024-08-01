import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/PaymentPage.css";
import toast from "react-hot-toast";
import { useCreateOrderMutation } from "@/redux/api/baseApi";
import { useEffect, useState } from "react";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalPrice } = location.state || { totalPrice: 0 };

  const [order, setOrder] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    payment: totalPrice.toFixed(2),
  });

  const [createOrder, { isError: orderError, isSuccess: orderSuccess }] =
    useCreateOrderMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const paymentAmount = parseFloat(order.payment);
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      toast.error("Invalid payment amount");
      return;
    }

    try {
      const result = await createOrder(order).unwrap();
      console.log("Order placed successfully:", result);
      navigate("/");
    } catch (err) {
      console.error("Failed to place the order:", err);
    }
  };

  useEffect(() => {
    if (orderError) {
      toast.error("Failed to place the order");
    } else if (orderSuccess) {
      toast.success("Order placed successfully");
    }
  }, [orderError, orderSuccess]);

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <h3 className="title">billing address</h3>

              <div className="inputBox">
                <span>Name :</span>
                <input
                  name="name"
                  type="text"
                  placeholder="john doe"
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <span>Email :</span>
                <input
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <span>Address :</span>
                <input
                  name="address"
                  type="text"
                  placeholder="room - street - locality"
                  onChange={handleChange}
                />
              </div>
              <div className="inputBox">
                <span>City :</span>
                <input
                  name="city"
                  type="text"
                  placeholder="city"
                  onChange={handleChange}
                />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>State :</span>
                  <input
                    name="state"
                    type="text"
                    placeholder="state"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputBox">
                  <span>Zip Code :</span>
                  <input
                    name="zipCode"
                    type="text"
                    placeholder="123 456"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="col">
              <h3 className="title">payment</h3>

              <div className="inputBox">
                <span>Cards Accepted :</span>
                <img src="https://i.ibb.co/30vR5Hg/card-img.png" alt="" />
              </div>

              <div className="inputBox">
                <span>Credit Card Number :</span>
                <input
                  name="cardNumber"
                  type="number"
                  placeholder="1111-2222-3333-4444"
                />
              </div>
              <div className="inputBox">
                <span>Exp Month :</span>
                <input
                  name="expMonth"
                  type="text"
                  placeholder="January"
                  onChange={handleChange}
                />
              </div>

              <div className="flex">
                <div className="inputBox">
                  <span>Exp Year :</span>
                  <input
                    name="expYear"
                    type="number"
                    placeholder="2022"
                    onChange={handleChange}
                  />
                </div>
                <div className="inputBox">
                  <span>CVV :</span>
                  <input
                    name="cvv"
                    type="text"
                    placeholder="1234"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="inputBox">
                <span>Payment :</span>
                <input
                  name="payment"
                  type="text"
                  value={order.payment}
                  readOnly
                />
              </div>
            </div>
          </div>

          <button
            className="
          bg-yellow-500 w-full h-10 rounded-xl 
          text-gray-600 font-semibold hover:bg-yellow-400"
            type="submit"
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
