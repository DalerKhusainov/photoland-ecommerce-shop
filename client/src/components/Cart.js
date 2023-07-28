// REACT HOOKS
import { useContext } from "react";

// ICONS
import { IoClose, IoArrowForward, IoCartOutline } from "react-icons/io5";

// REACT CONTEXT API
import { CartContext } from "../context/CartContext";

// COMPONENTS
import CartItem from "../components/CartItem";

// STRIPE
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51NYj3mKkLbGNP3gqdeAaaBG8C66Jkivcjlj2U4uv5ADOsHZUN6wHhzNe9dOoIWcUSryfrcrRZXVE9ULc02xYIrZQ00hPukH6Kf"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.Console.error(error);
    }
  };

  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-x-hidden overflow-y-auto h-[75vh]">
        {/* CLOSE ICON */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col px-2 gap-y-10">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      </div>
      {/* SUBTOTAL & TOTAL */}
      {cart.length >= 1 && (
        <div className="flex flex-col px-6 py-10">
          <div>
            {/* SUBTOTAL */}
            <div className="flex justify-between text-lg">
              <div>Subtotal</div>
              <div>$ {total}</div>
            </div>
            {/* TOTAL */}
            <div className="flex justify-between text-2xl">
              <div>Total</div>
              <div>$ {total}</div>
            </div>
          </div>
        </div>
      )}
      {/* BUTTONS */}
      <div className="px-6 class">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={clearCart}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              clear cart
            </button>
            <button
              onClick={handlePayment}
              className="flex-1 px-2 btn btn-accent hover:bg-accent-hover text-primary gap-x-2"
            >
              checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="absolute top-0 left-0 right-0 flex flex-col items-center justify-center h-full -z-10 text-white/30">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
