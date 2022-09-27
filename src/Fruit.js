import React from "react";
import cherry from "./cherry.png";
import SearchFruit from "./SearchFruit";

export default function Fruit() {
  return (
    <div className="home-page">
      <h1> Smoothie Maker </h1>
      <img className="cherry" src={cherry} alt="cherry" />
      <SearchFruit />
    </div>
  );
}
