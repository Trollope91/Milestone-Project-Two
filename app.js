const pokemon = [
  {name: "", image: ""}
]

let currentPokemon;

function getRandomPokemon() {
  const randomIndex = Math.floor(math.random() * pokemon.length);
  return
  pokemon[randomIndex];
}

function displayPokemon() {
  const imgElement = document.getElementById ("pokemon-img");
  const nameElement = document.getElementById ("pokemon-name")
  imgElement.src = currentPokemon.image
  nameElement.textConent = "";

}