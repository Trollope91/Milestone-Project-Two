const pokemon = [
  {name: "", image: ""}
]

let currentPokemon;

function getRandomPokemon() {
  const randomIndex = Math.floor(Math.random) * pokemon.length;
  return
  pokemon[randomIndex];
}