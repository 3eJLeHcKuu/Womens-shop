import React, { useState } from "react";
import {
  FaBagShopping,
  FaMagnifyingGlass,
  FaHeart,
  FaHouse,
} from "react-icons/fa6";
import Order from "./Order";
import { FaXmark } from "react-icons/fa6";
import "./Header.scss";

const show0rders = (props) => {
  let summa = 0;
  props.orders.forEach((el) => (summa += Number.parseFloat(el.price)));

  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">
        Summa: {new Intl.NumberFormat().format(summa)} UAH.
      </p>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h3>There are no items in your cart</h3>
    </div>
  );
};

export default function Header(props) {
  let [shopOpen, setShopOpen] = useState(false);
  let [callOpen, setCallOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">Strong life</span>
        <ul className="nav">
          <FaHouse className="profile" />
          <FaHeart className="heart" />
          <FaMagnifyingGlass className="search" />
          <FaBagShopping
            onClick={() => setShopOpen((shopOpen = !shopOpen))}
            className={`basket ${shopOpen && "active"}`}
          />
        </ul>

        {shopOpen && (
          <div className="shop-basket">
            {props.orders.length > 0 ? show0rders(props) : showNothing()}
          </div>
        )}
      </div>

      <div className="box">
        <div className="offer">
          <h1 className="title">Elemental force always trumps intelligence</h1>
          <p>If you want to change your life, you better start doing it now.</p>
          <button
            onClick={() => setCallOpen((callOpen = !callOpen))}
            className="btn"
          >
            Order a call
          </button>
          {callOpen && (
            <div className="call-button">
              <div>
                <FaXmark
                  onClick={() => setCallOpen((callOpen = !callOpen))}
                  className="call-btn"
                />
                <h1 className="question">Would you like us to callback ?</h1>
                <form
                  className="form"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <input
                    className="input"
                    name="number"
                    placeholder="Enter your number"
                    maxLength="13"
                  />
                  <button className="btn-form">Callback</button>
                </form>
              </div>
            </div>
          )}
        </div>
        <img src="/img/image.png" className="photo" alt="" />
      </div>
    </header>
  );
}
