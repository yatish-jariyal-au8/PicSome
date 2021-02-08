import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
