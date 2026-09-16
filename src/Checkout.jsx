import { useCartStore } from "./cart/cartStore";

export default function Checkout() {
  const total = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  const clear = useCartStore((state) => state.clear);

  const order = () => {
    clear();
  };

  return (
    <section className="checkout">
      <h2>Checkout</h2>
      <p>Total: {total.toFixed(2)} ETB</p>
      <button onClick={order}>Place Order</button>
    </section>
  );
}