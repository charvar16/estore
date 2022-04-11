import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/home"
import Collections from "./routes/collections"
import Collectionsid from "./routes/collectionsid"
// import Combo from "./routes/combo"
import Notfound from "./routes/notfound"
import Search from "./routes/search"
import Cart from "./routes/cart"
import Header from './components/header'
import Footer from './components/footer'


import './styles/styles.css'

function App() {
  return (
    <Router>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:id" element={<Collectionsid />}/>
        {/* <Route path="combo/:id" element={<Combo />}/> */}
        <Route path="search" element={<Search />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
    </Router>
  );
}

export default App;
