import { useCartStore } from "./cart/cartStore";
import CartBadge from "./CartBadge";
import Checkout from "./Checkout";
import { useAuth } from "./auth/AuthProvider";
import { useTheme } from "./theme/ThemeProvider";

const dishes = [
  { id: 1, name: "Doro Wot", price: 180 },
  { id: 2, name: "Tibs", price: 220 },
  { id: 3, name: "Shiro", price: 120 },
  { id: 4, name: "Kitfo", price: 260 }
];

function App() {
  const addItem = useCartStore((state) => state.addItem);
  const { user, login, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header>
        <h1>Addis Eats</h1>
        <div className="header-actions">
          <span>Cart: <CartBadge /></span>
          <button onClick={toggleTheme}>Theme</button>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={() => login("Guest")}>Login</button>
          )}
        </div>
      </header>

      <main>
        <h2>Dishes</h2>
        <div className="dishes">
          {dishes.map((dish) => (
            <article key={dish.id}>
              <h3>{dish.name}</h3>
              <p>{dish.price} ETB</p>
              <button onClick={() => addItem(dish)}>Add to Cart</button>
            </article>
          ))}
        </div>

        <Checkout />
      </main>
    </div>
  );
}

export default App;