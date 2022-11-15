import React from "react";
import { useNavigate } from "react-router-dom";

import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

export default function HomePage() {
  const navigate = useNavigate();

  function handleClick(path: "beers" | "random-beer" | "new-beer") {
    navigate("/" + path);
  }

  return (
    <>
      <article onClick={() => handleClick("beers")}>
        <img src={beers} alt="bar" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          dicta sequi natus, quibusdam dolorum harum quos dolore ut in, sit quam
          molestiae sunt numquam dolores unde magnam. Debitis, cupiditate ipsam.
        </p>
      </article>
      <article onClick={() => handleClick("random-beer")}>
        <img src={randomBeer} alt="tap" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          exercitationem molestiae reprehenderit iusto totam sunt illum est
          provident nam assumenda harum, aliquid rerum recusandae quam culpa,
          atque, magnam possimus doloribus!
        </p>
      </article>
      <article onClick={() => handleClick("new-beer")}>
        <img src={newBeer} alt="cup of beer" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          exercitationem molestiae reprehenderit iusto totam sunt illum est
          provident nam assumenda harum, aliquid rerum recusandae quam culpa,
          atque, magnam possimus doloribus!
        </p>
      </article>
    </>
  );
}
