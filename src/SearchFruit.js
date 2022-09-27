import FruitApi from "./FruitApi";
import { useState } from "react";
const SearchFruit = () => {
  const [showFruit, setShowFruits] = useState(false);

  return (
    <div className="home-page">
      <div className="form-outline mb-4">
        <input
          type="search"
          className="form-control"
          id="datatable-search-input"
          placeholder="Search a Fruit"
        ></input>
      </div>
      <div className="btn-div">
        <button
          className="btn btn-outline-primary"
          onClick={() => setShowFruits(true)}
        >
          Search a Fruit
        </button>
        <button className="btn btn-outline-primary">
          Search a Random Fruit
        </button>
      </div>

      {showFruit && <FruitApi />}
    </div>
  );
};

export default SearchFruit;
