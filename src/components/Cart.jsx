import { useCart } from "../context/CartContext";

export function Cart() {
  const { cartItems, removeFromCart } = useCart();

  // Calculate summary
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="flex flex-col p-8 bg-slate-700 min-h-screen text-white">

      <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT — CART ITEMS */}
        <div className="md:col-span-2 space-y-4">

          {cartItems.length === 0 && (
            <p className="text-center text-gray-300">Your cart is empty.</p>
          )}

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-slate-800 rounded-xl p-4 shadow-md"
            >
              <img
                src={item.image}
                width="90"
                className="rounded-lg"
              />

              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-green-300">Price: {item.price} ฿</p>

                <div className="flex items-center mt-2">
                  <span className="px-4 py-1 bg-slate-900">1</span>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="ml-4 px-3 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

        </div>

        {/* RIGHT — SUMMARY PANEL */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between text-lg mb-2">
            <span>Subtotal</span>
            <span>{subtotal} ฿</span>
          </div>

          <div className="flex justify-between text-lg mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t border-slate-600 my-3"></div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>{subtotal} ฿</span>
          </div>

          <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl text-xl">
            Checkout
          </button>
        </div>

      </div>

    </main>
  );
}
