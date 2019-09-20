import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

export default function Example2() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" component={() => <h1>home</h1>} />
      <Route path="/shop" component={Shop} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
}

function Nav() {
  return (
    <ul>
      <Link to="/">
        <li>home</li>
      </Link>
      <Link to="/shop">
        <li>shop</li>
      </Link>
    </ul>
  );
}

function Shop(props) {
  const [users] = useState({
    name: "NAME",
    age: 33
  });

  const confirmCheckout = () => {
    const query = [];
    for (const i in users) {
      query.push(`${encodeURIComponent(i)}=${encodeURIComponent(users[i])}`);
    }
    const queryString = query.join("&");
    props.history.push({
      pathname: "/checkout",
      search: `?${queryString}`
    });
  };

  return (
    <div>
      <h1>shop</h1>
      <button onClick={confirmCheckout}>confirm</button>
    </div>
  );
}

function Checkout(props) {
  const [users] = useState({});

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    for (const [key, value] of query) {
      users[key] = value;
    }
    console.log(users);
  }, []);

  return (
    <div>
      <h1>checkout</h1>
    </div>
  );
}
