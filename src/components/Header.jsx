import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

export function Header({ count, setPage }) {
  const { cartItems } = useCart();
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-4xl font-extrabold tracking-wide">
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-md">
          Uma
        </span>{" "}
        <span className="bg-gradient-to-r from-pink-400 via-pink-300 to-rose-400 bg-clip-text text-transparent drop-shadow-md">
          Musume
        </span>{" "}
        <span className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-md">
          Card Market
        </span>
      </h1>

      <button
        className="relative flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg"
        onClick={() => setPage("Cart")}
      >
        <ShoppingCartIcon className="h-6 w-6 text-white" />
        
        <span className="text">{cartItems.length}</span>
      </button>
    </header>
  );
}
