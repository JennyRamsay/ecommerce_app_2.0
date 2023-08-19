import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductList from "./containers/ProductList";
import NavBar from "./components/NavBar";
import Basket from "./containers/UserBasket";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./components/HomePage";
import {useState } from "react";


const App = () => {

  const [productList, setProductList] = useState(list)
  const [basket, setBasket] = useState([])

 
  const handleAddToBasket = (event) => {
    const chosenItem = productList.find((item)=> event.target.value == item.id)
    const newBasket = [...basket, chosenItem]
    setBasket(newBasket)
  };


  const handleDelFromBasket = () => {
    setBasket([])
  };


  const handleDelOneFromBasket = (event) => {
    const basketMinusOne = basket.filter((item,itemIndex) => itemIndex != event.target.value)
    setBasket(basketMinusOne)
  };



  return (
    <AppMain>

        <Headline>MY E-Commerce Website</Headline>
        <Headline>Lots of Random Items Shop</Headline>

      <Router> 
        <NavBar/>  
        <Routes>
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductList handleAddToBasket={handleAddToBasket} productList={productList} />} />
          <Route path="/basket" element={<Basket basket={basket} handleDelFromBasket={handleDelFromBasket} handleDelOneFromBasket={handleDelOneFromBasket}/>} />
        </Routes>      
      </Router>

    </AppMain>
  );
};


export default App;

const AppMain = styled.div`
background: #66bfbf;
margin: 10%;
margin-top: 0%;
padding: 5%;
color: #ffcab0;
`

const Headline = styled.h2`
color: #fcfefe;
`

const list = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    desc: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "81fPKd-2AYL._AC_SL1500_.jpg"
    
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    desc: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    image: "71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    desc: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    image: "71li-ujtlUL._AC_UX679_.jpg"
    
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    desc: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    image: "71YXzeOuslL._AC_UY879_.jpg"
  },
]

