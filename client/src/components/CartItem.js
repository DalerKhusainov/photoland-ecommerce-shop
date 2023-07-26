// REACT HOOKS
import { useContext } from "react";

// REACT ROUTER HOOKS
import { Link } from "react-router-dom";

// ICONS
import { IoClose } from "react-icons/io5";

// COMPONENTS
import Qty from "../components/Qty";

// REACT CONTEXT API
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt={item.attributes.title}
        />
      </Link>
      <div className="flex-1">
        {/* TITLE & REMOVE ICON */}
        <div className="flex mb-3 gap-x-4">
          <Link to={`/product/${item.id}`}>{item.attributes.title}</Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all duration-300"
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/* QUANTITY */}
          <div className="flex mb-2 gap-x-4">
            <Qty item={item} />
          </div>
          <div className="text-xl text-accent">
            $ {item.attributes.price * item.amount}
          </div>
        </div>
        {/* PRICE */}
        <div className="">
          <span className="text-accent">
            $ {item.attributes.price} per price
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
