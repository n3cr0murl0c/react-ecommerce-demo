import React from "react";
import "./App.css";
import App from "./App.jsx";
import leviosaImg from "./assets/images/leviosa.png";
import slytherineImg from "./assets/images/slytherine.png";
import lolitoImg from "./assets/images/lolito.png";
import respiraImg from "./assets/images/respira.png";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToAnchor from "./components/scrollAnchor.jsx";
import Shop from "./components/Shop/Shop.jsx";

export default function Layout() {
  const lang = window.navigator.language;
  React.useEffect(() => {
    if (lang === "es-ES") {
      setEnglish(false);
    }
  }, [lang]);

  const [english, setEnglish] = React.useState(true);
  const handleSetEnglish = () => {
    // console.log("english:", english);
    setEnglish((prev) => !prev);
  };
  const [favoriteList, setFavoriteList] = React.useState(
    JSON.parse(localStorage.getItem("favList")) || []
  );

  const [cartList, setCartList] = React.useState([]);

  const productList = [
    {
      id: 1,
      title: "Syltherine",
      description: "Stylish coffee table",
      image: slytherineImg,
      price: Math.ceil(Math.random() * 300),
      discount: true,
      discountValue: 0.3,
      previousPrice: Math.ceil(Math.random() * 1550),
      fav: false,
    },
    {
      id: 2,
      title: "Leviosa",
      description: "Stylish coffee chair",
      image: leviosaImg,
      price: Math.ceil(Math.random() * 500),
      discount: true,
      discountValue: 0.5,
      previousPrice: Math.ceil(Math.random() * 1750),
      fav: false,
    },
    {
      id: 3,
      title: "Lolito",
      description: "Luxury Big sofa",
      image: lolitoImg,
      price: Math.ceil(Math.random() * 500),
      discount: true,
      discountValue: 0.25,
      previousPrice: Math.ceil(Math.random() * 1750),
      fav: false,
    },
    {
      id: 4,
      title: "Respira",
      description: "Outdoor bar table and stool",
      image: respiraImg,
      price: Math.ceil(Math.random() * 500),
      discount: false,
      discountValue: 0.3,
      previousPrice: 1000,
      new: true,
      fav: false,
    },
  ];
  const handleFavoriteList = (item) => {
    if (favoriteList.length === 0) {
      let newItem = { ...item, fav: true };
      setFavoriteList([newItem]);
      localStorage.setItem("favList", JSON.stringify([newItem]));
      console.log("en app.jsx", favoriteList);
    } else {
      let newArray = [...favoriteList];
      let newItemIndex = newArray.findIndex((i) => {
        i.id === item.id;
      });
      newArray[newItemIndex].fav = !newArray[newItemIndex].fav;
      setFavoriteList(newArray);
      localStorage.setItem("favList", JSON.stringify(newArray));
      console.log("en app.jsx", favoriteList);
    }
    // console.log(newArray);
  };

  const handleCartList = (item) => {
    console.log("en app.jsx handle cartlist", item);
    setCartList((prev) => [...prev, item]);
    console.warn(cartList);
  };
  return (
    <>
      <Router>
        <ScrollToAnchor />
        <Routes>
          {/* Ruta de Portfolio LandingPage */}
          <Route
            path="/"
            element={
              <App
                english={english}
                handleEnglish={handleSetEnglish}
                favoriteList={favoriteList}
                cartList={cartList}
                handleCartList={handleCartList}
                handleFavoriteList={handleFavoriteList}
                productList={productList}
              />
            }
          >
            {/* <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Proyectos />} />
          <Route path="contact" element={<Contacto />} /> */}
          </Route>
          <Route path="shop">
            <Route
              index
              element={
                <Shop
                  english={english}
                  favoriteList={favoriteList}
                  cartList={cartList}
                  handleCartList={handleCartList}
                  handleFavoriteList={handleFavoriteList}
                  productList={productList}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
