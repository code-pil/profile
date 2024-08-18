import CartBubble from "./CartBubble";
import CartIcon from "./CartIcon";
import Link from "next/link";

const CartLink = () => {
  return (
    <Link
      href="cart"
      className="flex flex-row justify-center items-center space-x-2"
    >
      <div className="w-14 h-14 relative flex justify-center items-center">
        <div className="w-7 h-7">
          <CartIcon />
        </div>
        <CartBubble />
      </div>
      <span className="hidden font-bold text-lg sm:inline">Cart</span>
    </Link>
  );
};

export default CartLink;
