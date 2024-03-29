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
import ShopLayout from "./components/Shop/ShopLayout.jsx";
import SingleProduct from "./components/Shop/SingleProduct/SingleProduct.jsx";
export default function Layout() {
  const lang = window.navigator.language;
  React.useEffect(() => {
    if (lang === "es-ES") {
      setEnglish(false);
    }
  }, [lang]);

  const [english, setEnglish] = React.useState(true);
  const handleSetEnglish = (state) => {
    setEnglish(state);
  };
  const [favoriteList, setFavoriteList] = React.useState(
    JSON.parse(localStorage.getItem("favList")) || []
  );

  const [cartList, setCartList] = React.useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  const [productList, setProductList] = React.useState([
    {
      id: 1,
      title: "Syltherine",
      quickDescription: "Stylish coffee table",
      images: [
        slytherineImg,
        leviosaImg,
        slytherineImg,
        leviosaImg,
        slytherineImg,
      ],
      price: 359.99,
      discount: true,
      discountValue: 0.3,
      previousPrice: 500,
      fav: false,
      dateAdded: "2023-06-21",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 2,
      title: "Leviosa",
      quickDescription: "Stylish coffee chair",
      images: [leviosaImg, leviosaImg, leviosaImg, leviosaImg],
      price: 249.99,
      discount: true,
      discountValue: 0.5,
      previousPrice: 300,
      fav: false,
      dateAdded: "2023-06-22",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 3,
      title: "Lolito",
      quickDescription: "Luxury Big sofa",
      images: [lolitoImg, lolitoImg, lolitoImg, lolitoImg],
      price: 124.99,
      discount: true,
      discountValue: 0.25,
      previousPrice: 350,
      fav: false,
      dateAdded: "2023-06-20",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 4,
      title: "Respira",
      quickDescription: "Outdoor bar table and stool",

      images: [respiraImg, respiraImg, respiraImg, respiraImg],
      price: 99.99,
      discount: false,
      discountValue: 0.3,
      previousPrice: 120,
      new: true,
      fav: false,
      dateAdded: "2023-12-04",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 5,
      title: "Respira",
      quickDescription: "Outdoor bar table and stool",
      images: [respiraImg, respiraImg, respiraImg, respiraImg],
      price: 99.99,
      discount: false,
      discountValue: 0.3,
      previousPrice: 120,
      new: true,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 6,
      title: "Respira",
      quickDescription: "Outdoor bar table and stool",
      images: [respiraImg, respiraImg, respiraImg, respiraImg],
      price: 99,
      discount: false,
      discountValue: 0.3,
      previousPrice: 120,
      new: true,
      fav: false,
      dateAdded: "2023-06-23",

      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 7,
      title: "Respira",
      quickDescription: "Outdoor bar table and stool",
      images: [respiraImg, respiraImg, respiraImg, respiraImg],
      price: 39.99,
      discount: false,
      discountValue: 0.3,
      previousPrice: 120,
      new: true,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 8,
      title: "Respira",
      quickDescription: "Outdoor bar table and stool",
      images: [respiraImg, respiraImg, respiraImg, respiraImg],
      price: 499.99,
      discount: false,
      discountValue: 0.3,
      previousPrice: 1000,
      new: true,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 9,
      title: "Leviosa",
      quickDescription: "Stylish coffee chair",
      images: [leviosaImg, leviosaImg, leviosaImg, leviosaImg],
      price: 156.99,
      discount: true,
      discountValue: 0.5,
      previousPrice: 250,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 10,
      title: "Lolito",
      quickDescription: "Luxury Big sofa",
      images: [lolitoImg, lolitoImg, lolitoImg, lolitoImg],
      price: 15.99,
      discount: true,
      discountValue: 0.25,
      previousPrice: 123.45,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 11,
      title: "Lolito",
      quickDescription: "Luxury Big sofa",
      images: [lolitoImg, lolitoImg, lolitoImg, lolitoImg],
      price: 1299.99,
      discount: true,
      discountValue: 0.25,
      previousPrice: 1500,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
    {
      id: 12,
      title: "Lolito",
      quickDescription: "Luxury Big sofa",
      images: [lolitoImg, lolitoImg, lolitoImg, lolitoImg],
      price: 599.99,
      discount: true,
      discountValue: 0.25,
      previousPrice: 750,
      fav: false,
      dateAdded: "2023-06-23",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, minus quidem voluptate voluptatem soluta quas unde tempore sequi velit repellat.",
      variants: [
        { name: "Size", esName: "Tamaño", el: ["S", "L", "XL"] },
        {
          name: "Color",
          esName: "Color",
          el: ["purple", "black", "brown"],
        },
      ],
      qty: 0,
      stock: 10,
      sku: "SS001",
      category: "Sofas",
      tags: ["Sofa", "Chair", "Home", "Shop"],
    },
  ]);

  const handleProducts = (operation, type) => {
    console.log(operation, " code: ", type);
    if (operation === "order") {
      if (type === 2) {
        console.log("Precio en orden ascendente ");
        let newProductList = productList.sort((a, b) => {
          if (a.price < b.price) {
            return 1;
          }
          if (a.price > b.price) {
            return -1;
          }

          return 0;
        });
        console.log("Sorted List->", newProductList);
        setProductList(newProductList);
      } else if (type === 1) {
        console.log("orden descendente");
        let newProductList = productList.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }

          return 0;
        });
        console.log("Sorted List->", newProductList);
        setProductList(newProductList);
      } else if (type === 3) {
        console.log("orden más antiguo");
        let newProductList = productList.sort((a, b) => {
          if (a.dateAdded > b.dateAdded) {
            return 1;
          }
          if (a.dateAdded < b.dateAdded) {
            return -1;
          }

          return 0;
        });
        console.log("Sorted List->", newProductList);
        setProductList(newProductList);
      } else if (type === 4) {
        console.log("orden más nuev");
        let newProductList = productList.sort((a, b) => {
          if (a.dateAdded < b.dateAdded) {
            return 1;
          }
          if (a.dateAdded > b.dateAdded) {
            return -1;
          }

          return 0;
        });
        console.log("Sorted List->", newProductList);
        setProductList(newProductList);
      }
    }
  };
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

  const addItem = (product) => {
    let ls = JSON.parse(localStorage.getItem("cartList"));
    console.log("en addItem: LS:", ls);
    if (ls) {
      console.log("en localStorage");
      let exist = ls.find((item) => {
        return item.id === product.id;
      });

      if (exist) {
        exist.qty = exist.qty + 1;
        console.log("exist en ls>exist: ", exist);

        let newData = [...ls, exist];
        localStorage.setItem("cartList", JSON.stringify(newData));
        setCartList(newData);
      } else {
        if (ls) {
          let newData = [...ls, product];
          localStorage.setItem("cartList", JSON.stringify(newData));
          setCartList(newData);
        }
      }
    } else {
      console.log("ls=null");
      let exist = cartList.find((item) => {
        return item.id === product.id;
      });
      if (exist) {
        exist.qty = exist.qty + 1;
        console.log("exist sin ls: ", exist);
        let newData = [...ls, exist];
        localStorage.setItem("cartList", JSON.stringify(newData));
        setCartList(newData);
      } else {
        if (ls) {
          let newData = [...ls, product];
          localStorage.setItem("cartList", JSON.stringify(newData));
          setCartList(newData);
        } else {
          let newProduct = { ...product, qty: 1 };
          let newData = [newProduct];
          localStorage.setItem("cartList", JSON.stringify(newData));
          setCartList(newData);
        }
      }
    }
    console.log("cartList", cartList);
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
                // setEnglish={setEnglish}
                favoriteList={favoriteList}
                cartList={cartList}
                handleCartList={handleCartList}
                handleFavoriteList={handleFavoriteList}
                productList={productList}
                addItem={addItem}
              />
            }
          >
            {/* <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Proyectos />} />
          <Route path="contact" element={<Contacto />} /> */}
          </Route>
          <Route
            element={
              <ShopLayout
                english={english}
                handleEnglish={handleSetEnglish}
                favoriteList={favoriteList}
                cartList={cartList}
                handleCartList={handleCartList}
                handleFavoriteList={handleFavoriteList}
                productList={productList}
                handleProducts={handleProducts}
              />
            }
          >
            <Route
              path="shop"
              element={
                <Shop
                  english={english}
                  handleEnglish={handleSetEnglish}
                  favoriteList={favoriteList}
                  cartList={cartList}
                  handleCartList={handleCartList}
                  handleFavoriteList={handleFavoriteList}
                  productList={productList}
                  handleProducts={handleProducts}
                />
              }
            ></Route>
            <Route
              path="shop/product/:productId/"
              element={
                <SingleProduct
                  productList={productList}
                  setProductList={setProductList}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
