import { useCartStore } from "./cart/cartStore";

export default function CartBadge() {
  const itemCount = useCartStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  return <span className="cart-badge">{itemCount}</span>;
}