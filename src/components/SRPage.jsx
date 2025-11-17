import { useCart } from "../context/CartContext";

export function SRPage({ onCheckout }) {
  const { addToCart } = useCart();

  const ssrCards = [
    {
      name: "Mejiro ardan|SR|",
      image: "support_card_s_20034.png",
      price: 555
    },
    {
      name: "Shinko Windy|SR|",
      image: "support_card_s_20031.png",
      price: 555
    },
    {
      name: "Seeking the pearl|SR|",
      image: "support_card_s_20029.png",
      price: 555
    },
    {
      name: "Zenno Rob Roy|SR|",
      image: "support_card_s_20028.png",
      price: 555
    },
    {
      name: "Nishino Flower|SR|",
      image: "support_card_s_20027.png",
      price: 555
    },
    {
      name: "Ikuno Dictus|SR|",
      image: "support_card_s_20025.png",
      price: 555
    },
    {
      name: "Daitaku Helios|SR|",
      image: "support_card_s_20024.png",
      price: 555
    },
    {
      name: "Sweep Tosho|SR|",
      image: "support_card_s_20023.png",
      price: 555
    },
    {
      name: "Aoi Kiryuin|SR|",
      image: "support_card_s_20021.png",
      price: 555
    },
    {
      name: "King Halo|SR|",
      image: "support_card_s_20020.png",
      price: 555
    },
    {
      name: "Nice Nature|SR|",
      image: "support_card_s_20019.png",
      price: 555
    },
    {
      name: "Marvelous Sunday|SR|",
      image: "support_card_s_20015.png",
      price: 555
    },
    {
      name: "Narita Taishin|SR|",
      image: "support_card_s_20014.png",
      price: 555
    },
    {
      name: "Eishin Flash|SR|",
      image: "support_card_s_20013.png",
      price: 555
    },
    {
      name: "Agnes Tachyon|SR|",
      image: "support_card_s_20012.png",
      price: 555
    },
    {
      name: "Mihono Bourbon|SR|",
      image: "support_card_s_20009.png",
      price: 555
    },
    {
      name: "Manhattan Cafe|SR|",
      image: "support_card_s_20008.png",
      price: 555
    },
    {
      name: "Mayano Top Gun|SR|",
      image: "support_card_s_20007.png",
      price: 555
    },
    {
      name: "Hishi Amazon|SR|",
      image: "support_card_s_20003.png",
      price: 555
    },
    {
      name: "Daiwa Scarlet|SR|",
      image: "support_card_s_20002.png",
      price: 555
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
