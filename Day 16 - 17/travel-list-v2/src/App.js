import './index.css';
import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  function handleAddItem(event) {
    event.preventDefault();
    // console.log(event);
    if (!description) return;
    let newItems = {
      id: Date.now(),
      description,
      packed: false,
      quantity,
    };
    setItems((items) => [...items, newItems]);

    // to clear input field
    setDescription('');
    setQuantity(1);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form
        // include missing props
        setQuantity={setQuantity}
        setDescription={setDescription}
        description={description}
        quantity={quantity}
        onAddItem={handleAddItem}
      />
      <PackingList
        items={items}
        onToggleItem={handleToggleItem}
        onDeleteItem={handleDeleteItem}
      />
      <Footer items={items} />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>🌴 🌴 Travel List 🌴 🌴</h1>
    </div>
  );
}

function Form({
  setDescription,
  setQuantity,
  description,
  quantity,
  onAddItem,
}) {
  function handleInputChange(event) {
    setDescription(event.target.value);
  }

  function handleSelectChange(event) {
    setQuantity(event.target.value);
  }
  return (
    <form className="add-form" onSubmit={onAddItem}>
      what do you need for your trip?
      <select onChange={handleSelectChange}>
        {/* Method first to create option using Array */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="Item...."
        onChange={handleInputChange}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => onToggleItem(item.id)} />
            <span
              style={
                item.packed
                  ? {
                      textDecoration: 'line-through',
                    }
                  : {}
              }
            >
              {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ items }) {
  let numItems = items.length;
  return (
    <div className="stats">{`You have ${numItems} item in your list.`}</div>
  );
}
