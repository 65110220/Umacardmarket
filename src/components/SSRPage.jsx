import { useCart } from "../context/CartContext";

export function SSRPage({ onCheckout }) {
  const { addToCart } = useCart();

  const ssrCards = [
    {
      name: "Mejiro Dober",
      image: "support_card_s_30041.png",
      price: 777
    },
    {
      name: "Hishi Akebono",
      image: "support_card_s_30040.png",
      price: 777
    },
    {
      name: "Kawakami Princess",
      image: "support_card_s_30039.png",
      price: 777
    },
    {
      name: "Sakura Chiyono O",
      image: "support_card_s_30038.png",
      price: 777
    },
    {
      name: "Silence Suzuka",
      image: "support_card_s_30062.png",
      price: 777
    },
    {
      name: "King Halo",
      image: "support_card_s_30056.png",
      price: 777
    },
    {
      name: "Seiun Sky",
      image: "support_card_s_30055.png",
      price: 777
    },
    {
      name: "Nice Nature",
      image: "support_card_s_30054.png",
      price: 777
    },
    {
      name: "Daiwa Scarlet",
      image: "support_card_s_30047.png",
      price: 777
    },
    {
      name: "Sweep Tosho",
      image: "support_card_s_30045.png",
      price: 777
    },
    {
      name: "Riko Kashimoto",
      image: "support_card_s_30036.png",
      price: 777
    },
    {
      name: "Rice Shower",
      image: "support_card_s_30034.png",
      price: 777
    },
    {
      name: "Yaeno Muteki",
      image: "support_card_s_30032.png",
      price: 777
    },
    {
      name: "Satano Diamond",
      image: "support_card_s_30029.png",
      price: 777
    },
    {
      name: "Kitasan Black",
      image: "support_card_s_30028.png",
      price: 777
    },
    {
      name: "Twin Turbo",
      image: "support_card_s_30026.png",
      price: 777
    },
    {
      name: "Oguri Cap",
      image: "support_card_s_30024.png",
      price: 777
    },
    {
      name: "Haru Urara",
      image: "support_card_s_30019.png",
      price: 777
    },
    {
      name: "Gold City",
      image: "support_card_s_30014.png",
      price: 777
    },
    {
      name: "Special Week",
      image: "support_card_s_30001.png",
      price: 777
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
