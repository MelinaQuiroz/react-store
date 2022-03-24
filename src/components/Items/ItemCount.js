import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
// import "../../components/Items/ItemCount.scss";

export default function ItemCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter <= stock - 1)
      //tuve que poner asi porque se me agregaba 1 xD
      setCounter(counter + 1);
  };

  const restar = () => {
    if (counter >= initial) setCounter(counter - 1);
  };

  return (
    <>
    <section className="count-container">
      <div className="item-count-container">
        <button className="btn-count" onClick={sumar}>
          +
        </button>
        <h3>{counter}</h3>
        <button className="btn-count" onClick={restar}>
          -
        </button>
      </div>
      </section>
      <button className="add-cart" onClick={() => onAdd(counter)}>
        <HiShoppingCart size="1.5em" />
        Agregar al carrito
      </button>
    </>
  );
}