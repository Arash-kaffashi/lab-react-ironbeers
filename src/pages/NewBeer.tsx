import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {
  let navigate = useNavigate();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    let data = new FormData(e.target as HTMLFormElement);
    // validate data
    for (let [name, value] of data.entries()) {
      if (!value || (name === "attenuation_level" && isNaN(+value)))
        return alert(`O campo "${name}" está vazio ou com tipo inválido!`);
    }

    let response = await axios
      .post("https://ironbeer-api.fly.dev/new", {
        ...Object.fromEntries(data),
        ...{ attenuation_level: +data.get("attenuation_level")! }, // convert to number
      })
      .catch(
        ({
          message,
          response: {
            data: { msg },
          },
        }) => {
          alert(message + "\n" + msg);
        }
      );

    if (response?.status !== 200)
      return alert("Algo deu errado, tente novamente!");

    alert("Bebida adicionada com sucesso!\nVocê será redirecionado...");
    navigate("/");
  }

  return (
    <form className="new-beer" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="tagline">Tagline</label>
        <input type="text" id="tagline" name="tagline" />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" />
      </div>
      <div>
        <label htmlFor="firstBrewed">First Brewed</label>
        <input type="text" id="firstBrewed" name="first_brewed" />
      </div>
      <div>
        <label htmlFor="tips">Brewers</label>
        <input type="text" id="tips" name="brewers_tips" />
      </div>
      <div>
        <label htmlFor="attenuation">Attenuation Level</label>
        <input type="number" id="attenuation" name="attenuation_level" />
      </div>
      <div>
        <label htmlFor="contributed">Contributed By</label>
        <input type="text" id="contributed" name="contributed_by" />
      </div>
      <div>
        <button>ADD NEW</button>
      </div>
    </form>
  );
}
