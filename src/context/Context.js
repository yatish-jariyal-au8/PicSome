import React, { useState, useEffect } from "react";
const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("photos");
    console.log("in use effect")
    if (!localData) {
        console.log("fetching data")
      fetch(
        "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
      )
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("photos", JSON.stringify(data));
          setAllPhotos(data);
        });
    }
    else {
        console.log("data present in local, so not fetching")
        setAllPhotos(JSON.parse(localData));
    }
  }, []);

  const toggleFavorite = (id) => {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });

    setAllPhotos(updatedArr);
    localStorage.setItem("photos", JSON.stringify(updatedArr));
  };

  useEffect(() => {
    //load all items from local storage
    const local = localStorage.getItem("cart");
    if (local) {
      setCartItems(JSON.parse(local));
    }
  }, []);

  const addToCart = (newItem) => {
    setCartItems([...cartItems, newItem]);
    localStorage.setItem("cart", JSON.stringify([...cartItems, newItem]));
    console.log("added", cartItems);
  };

  const removeFromCart = (id) => {
    const updatedArr = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedArr);
    localStorage.setItem("cart", JSON.stringify(updatedArr));
    console.log('removed')
  };

  const emptyCart = () => {
    setCartItems([])
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

/*
1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
    a. Have this function also console.log something so we know it's running correctly
    b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
2. Make it so clicking the heart icon on any given image runs this method
*/
