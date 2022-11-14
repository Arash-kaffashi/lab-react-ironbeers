import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { beer } from "../interfaces";

export default function Beers() {
  const navigate = useNavigate();
  const [beers, setBeers] = useState([] as beer[]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://ironbeer-api.fly.dev/");
      setBeers(response.data as beer[]);
    })();
  }, []);

  function handleClick(id: string) {
    navigate("/beer/" + id);
  }

  return (
    <div>
      {beers.map(({ image, name, tagline, contributed_by, _id }) => {
        return (
          <div className="beer" key={_id} onClick={() => handleClick(_id)}>
            <div>
              <img src={image} alt="tagline" />
            </div>
            <div>
              <h1>{name}</h1>
              <h2>{tagline}</h2>
              <p>
                <span className="created_by">Created by:</span> {contributed_by}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
