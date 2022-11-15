import React, { Key, useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { beer } from "../interfaces";

export default function Details() {
  const navigate = useNavigate();
  const { state }: { state: beer | null; key: Key } = useLocation();
  const { id } = useParams();
  const [beer, setBeer] = useState(state);

  useEffect(() => {
    !state &&
      (async () => {
        let response = await axios
          .get("https://ironbeer-api.fly.dev/" + id)
          .catch(() => {
            navigate("/beers/not-found");
            return null;
          });
        if (response === null) return;
        setBeer(response.data);
      })();
  }, [id, state, navigate]);

  if (!beer) return null;

  let {
    image,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
    _id,
  } = beer;

  return (
    <div key={_id} className="details">
      <header>
        <div className="justify-center">
          <img src={image} alt={tagline} />
        </div>
        <div className="justify-between">
          <h1>{name}</h1>
          <h1 className="text-gray">{attenuation_level}</h1>
        </div>
        <div>
          <span className="float-right">{first_brewed}</span>
          <h2 className="text-gray">{description}</h2>
        </div>
      </header>
      <p>{description}</p>
      <footer className="text-gray">{contributed_by}</footer>
    </div>
  );
}
