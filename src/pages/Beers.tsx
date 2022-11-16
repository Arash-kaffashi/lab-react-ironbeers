import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { beer } from "../interfaces";

export default function Beers() {
  const navigate = useNavigate();
  const [beers, setBeers] = useState([] as beer[]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://ironbeer-api.fly.dev/");
      setBeers(response.data as beer[]);
    })();
  }, []);

  function handleClick(beer: beer) {
    navigate("/beers/" + beer._id, { state: beer, replace: false });
  }

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchItem(e.target.value);
  }

  return (
    <div>
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          value={searchItem}
          onChange={handleSearch}
        />
      </div>
      {beers
        .filter((beer) =>
          beer.name.toLowerCase().includes(searchItem.toLowerCase())
        )
        .map((beer) => {
          let { image, name, tagline, contributed_by, _id } = beer;
          return (
            <div className="beer" key={_id} onClick={() => handleClick(beer)}>
              <div>
                <img src={image} alt="tagline" />
              </div>
              <div>
                <h1>{name}</h1>
                <h2>{tagline}</h2>
                <p>
                  <span className="created_by">Created by:</span>{" "}
                  {contributed_by}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
