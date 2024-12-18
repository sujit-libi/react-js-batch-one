const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Mitho Pizza Cafe and Restro</h1>
    </header>
  );
}

function Menu() {
  const style = {
    color: 'green',
    fontSize: '48px',
    textTransform: 'uppercase',
  };
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  // numPizza: 0
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Conditional Rendering with && */}
      {/* {numPizza !== 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            return (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </ul>
      )} */}

      {/* Conditional Rendering with Terneries Operator */}
      {numPizza ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => {
            // if (pizza.soldOut) return null;
            return (
              <Pizza
                name={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </ul>
      ) : (
        <p>We are working on our menu. Please have patience and stay tune</p>
      )}
      {/* <Pizza
        name="Pizza spinaci"
        price="340"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
      />
      <Pizza
        name="Pizza spinaci 1"
        price="350"
        photoName="pizzas/spinaci.jpg"
        ingredients="Tomato, mozarella, spinach,asdfasdf and ricotta cheese"
      /> */}
    </main>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{!soldOut ? `NRS. ${price}` : 'Sold Out'}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;

  // if (hour >= openingHour && hour <= closingHour) {
  //   alert('Our cafe is opened');
  // } else {
  //   alert("Sorry !!! We're closed");
  // }

  const isOpen = hour >= openingHour && hour <= closingHour;

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order />
        ) : (
          <p>Sorry We're closed for now please visit us later</p>
        )}
      </div>
      {/* {new Date().toLocaleTimeString()} Footer */}
    </footer>
  );
}

function Order() {
  return (
    <>
      <p>We are opened now. You can come over and have delicious pizza</p>
      <button className="btn">Order Now</button>
    </>
  );
}

export default App;
