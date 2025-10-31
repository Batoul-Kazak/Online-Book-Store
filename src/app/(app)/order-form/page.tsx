import { useState } from "react";

type orderType = {
  name: string;
  email: string;
  location: string;
};

const OrderForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [orders, setOrders] = useState<orderType[]>([]);

  const locations = ["Damascus", "Berlin", "Musko", "Al-Kahira", "London"];

  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      name: name,
      email: email,
      location: location,
    };
    setOrders((orders_) => [...orders_, newOrder]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  );
};
export default OrderForm;
