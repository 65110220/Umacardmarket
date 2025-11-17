import { useCart } from "../context/CartContext";

export function RPage({ onCheckout }) {
  const { addToCart } = useCart();

  const ssrCards = [
    {
      name: "Tazuna Hayakawa|R|",
      image: "support_card_s_10021.png",
      price: 333
    },
    {
      name: "Aoi Kiryuin|R|",
      image: "support_card_s_10022.png",
      price: 333
    },
    {
      name: "Daiwa Scarlet|R|",
      image: "support_card_s_10023.png",
      price: 333
    },
    {
      name: "Hishi Amazon|R|",
      image: "support_card_s_10024.png",
      price: 333
    },
    {
      name: "Air Groove|R|",
      image: "support_card_s_10025.png",
      price: 333
    },
    {
      name: "Agnes Digital|R|",
      image: "support_card_s_10026.png",
      price: 333
    },
    {
      name: "Tamamo Cross|R|",
      image: "support_card_s_10027.png",
      price: 333
    },
    {
      name: "Fine Motion|R|",
      image: "support_card_s_10028.png",
      price: 333
    },
    {
      name: "Biwa Hayahide|R|",
      image: "support_card_s_10029.png",
      price: 333
    },
    {
      name: "Mayano Top Gun|R|",
      image: "support_card_s_10030.png",
      price: 333
    },
    {
      name: "Manhattan Cafe|R|",
      image: "support_card_s_10031.png",
      price: 333
    },
    {
      name: "Mihono Bourbon|R|",
      image: "support_card_s_10032.png",
      price: 333
    },
    {
      name: "Mejiro Ryan|R|",
      image: "support_card_s_10033.png",
      price: 333
    },
    {
      name: "Yukino Bijin|R|",
      image: "support_card_s_10034.png",
      price: 333
    },
    {
      name: "Ines Fujin|R|",
      image: "support_card_s_10035.png",
      price: 333
    },
    {
      name: "Agnes Tachyon|R|",
      image: "support_card_s_10036.png",
      price: 333
    },
    {
      name: "Air Shakur|R|",
      image: "support_card_s_10037.png",
      price: 333
    },
    {
      name: "Eishin Flash|R|",
      image: "support_card_s_10038.png",
      price: 333
    },
    {
      name: "Smart Falcon|R|",
      image: "support_card_s_10039.png",
      price: 333
    },
    {
      name: "Fuji Kiseki|R|",
      image: "support_card_s_10049.png",
      price: 333
    }
  ];

  return (
    <main className="flex flex-1 p-6 bg-slate-600 gap-4 grid grid-cols-4">

      {ssrCards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col items-center hover:scale-110 hover:shadow-xl hover:bg-slate-700 transition-transform duration-200 rounded-lg p-3"
        >
          <img src={card.image} width="120" className="rounded-lg" />
          <h2 className="text-xl font-semibold mt-2">{card.name}</h2>
          <h2 className="text-lg font-bold text-green-300 mb-2">{card.price} ฿</h2>

          <button
            onClick={() => {
              addToCart(card);
              onCheckout(); // <-- keep your header count update
            }}
            className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Checkout
          </button>
        </div>
      ))}

    </main>
  );
}
