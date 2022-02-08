import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import Home from "./pages/Home"
import PageChat from "./pages/PageChat"
import PageChien from "./pages/PageChien"
import PageOiseaux from "./pages/PageOiseaux"
import PagePoisson from "./pages/PagePoisson"
import PageRongeur from "./pages/PageRongeur"
import Panier from "./pages/Panier"
import Admin from "./pages/Admin"
import PageErreur from "./pages/PageErreur"
import { data } from "./data/data"


function App() {

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    data.forEach(element => {
      if (element.id === product.id) {
        if (element.stock > 0) {
          const exist = cartItems.find((x) => x.id === product.id);
          if (exist) {
            setCartItems(
              cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
              )
            );
          } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
          }
          element.stock -= 1;
        }
      }
    });
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    data.forEach(element => {
      if (element.id === product.id) {
        element.stock += 1;
      }
    });
  };
  
  const onClear = () => {
    setCartItems([])
  }
  
  const ajoutArticle = (article) => {
    data.push(article)
    console.log("test");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  onAdd={onAdd} data={data} />} />
        <Route path="/chat" element={<PageChat  onAdd={onAdd} data={data} />} />
        <Route path="/chien" element={<PageChien  onAdd={onAdd} data={data} />} />
        <Route path="/oiseaux" element={<PageOiseaux  onAdd={onAdd} data={data} />} />
        <Route path="/poisson" element={<PagePoisson  onAdd={onAdd} data={data} />} />
        <Route path="/rongeur" element={<PageRongeur  onAdd={onAdd} data={data} />} />
        <Route path="/panier" element={<Panier cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onClear={onClear} />} />
        <Route path="/admin" element={<Admin ajoutArticle={ajoutArticle} />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
