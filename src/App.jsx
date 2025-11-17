import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { SSRPage } from "./components/SSRPage";
import { SRPage } from "./components/SRPage";
import { RPage } from "./components/RPage";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/CartContext";

export default function App() {
  const [page, setPage] = useState("SSR");
  const [checkoutCount, setCheckoutCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header count={checkoutCount} setPage={setPage} />

      <div className="flex flex-1 w-screen">
        <SideMenu setPage={setPage} />

        <main className="flex-1 p-6">
          {page === "SSR" && (
            <SSRPage onCheckout={() => setCheckoutCount(checkoutCount + 1)} />
          )}
          {page === "SR" && (
            <SRPage onCheckout={() => setCheckoutCount(checkoutCount + 1)} />
          )}
          {page === "R" && (
            <RPage onCheckout={() => setCheckoutCount(checkoutCount + 1)} />
          )}
          {page === "Cart" && <Cart />}
        </main>
      </div>
      <Footer />
    </div>
  );
}
