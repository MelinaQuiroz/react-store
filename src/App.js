import NavbarContainer from "./components/Header/NavbarContainer";
import ItemListContainer from "./components/Items/ItemListContainer";
import Item from "./components/Items/Item";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <NavbarContainer/>
    <ItemListContainer/>
    <Item/>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
