function App() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />

      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />

      <SearchBar />
      <PropertyCard />
    </div>
  );
}

function Menu() {
  return <div>Menu</div>;
}

function Pizza() {
  return (
    <div>
      <h1>Pizza one</h1>
    </div>
  );
}

function SearchBar() {
  return <div>SearchBar</div>;
}

function PropertyCard() {
  return <div>Property CArd</div>;
}

export default App;
