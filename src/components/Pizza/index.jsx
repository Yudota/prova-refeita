import React from "react";
export default function MenuPizza({ pizza }) {
  return (
    <>
      <div>
        ID: {pizza.id}
        <br />
        Name: {pizza.name}
        <br />
        <img src={pizza.image} alt="pizza" />
        <br />
        Description: {pizza.description}
        <br />
        Price: {pizza.price}
      </div>
    </>
  );
}
