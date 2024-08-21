import { useState } from "react";

const myPokemonFront =
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png";
const myPokemonBack =
"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/387.png";

const Questao02 = () => {
    const [pokemonSide, setPokemonSide] = useState("frente");

    // função que recebe um lado e alterna para o outro
    const handleChangePokemonSide = (side) => {
        if (side === "frente") setPokemonSide("costas");
        else setPokemonSide("frente");
    };

    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "30vh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {/* renderizando o lado correspondente ao estado atual
            utilizando renderização condicional */}
            {pokemonSide === "frente" ? (
              <img width={"280px"} src={myPokemonFront} alt="pokemon"></img>
            ) : (
              <img width={"280px"} src={myPokemonBack} alt="pokemon"></img>
            )}
            
            {/* o botão invova uma arrow funcion que executa a função
            passando o estado atual para a função de trocar */}
            <button onClick={() => handleChangePokemonSide(pokemonSide)}>
                Ver {pokemonSide === "frente" ? "costas" : "frente"}
            </button>
        </div>
    );
};

export default Questao02;
