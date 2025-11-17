export function Cart() {
  return (
    <main className="flex flex-col p-8 bg-slate-700 min-h-screen text-white">

      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT — CART ITEMS */}
        <div className="md:col-span-2 space-y-4">

          {/* CART ITEM */}
          <div className="flex items-center bg-slate-800 rounded-xl p-4 shadow-md">
            <img
              src="support_card_s_10021.png"
              width="90"
              className="rounded-lg"
            />

            <div className="ml-4 flex-1">
              <h2 className="text-xl font-bold">Tazuna Hayakawa (R)</h2>
              <p className="text-green-300">Price: 150 ฿</p>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center mt-2">
                <button className="px-3 py-1 bg-slate-900 rounded-l-lg hover:bg-slate-600">
                  -
                </button>
                <span className="px-4 py-1 bg-slate-900">1</span>
                <button className="px-3 py-1 bg-slate-900 rounded-r-lg hover:bg-slate-600">
                  +
                </button>
              </div>
            </div>

            {/* REMOVE BUTTON */}
            <button className="ml-4 px-3 py-2 bg-red-500 hover:bg-red-600 rounded-lg">
              Remove
            </button>
          </div>

        </div>

        {/* RIGHT — SUMMARY */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between text-lg mb-2">
            <span>Subtotal</span>
            <span>150 ฿</span>
          </div>

          <div className="flex justify-between text-lg mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div className="border-t border-slate-600 my-3"></div>

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>150 ฿</span>
          </div>

          <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-xl text-xl">
            Checkout
          </button>
        </div>

      </div>

    </main>
  );
}
