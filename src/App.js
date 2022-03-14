import NavbarContainer from "./components/Header/NavbarContainer";
import ItemListContainer from "./components/Items/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavbarContainer/>

      <ItemListContainer greetings={"hello world"}/>
    </div>
  );
}

export default App;
