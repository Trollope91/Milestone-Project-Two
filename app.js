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
  nameElement.textContent = "";

}

function checkPokemon() {
  const inputElement = document.getElementById ("pokemon-input")
  const guess = inputElement.value.toLowerCase();
  const resultElement = Document.getElementById("result")
  
  if (guess === currentPokemon.name) {
    resultElement.textContent = "It's " + currentPokemon.name + "!";
  } else {
resultElement.textContent = "Wrong, try again!";
  }

  inputElement.value = "";
      currentPokemon = getRandomPokemon();
      displayPokemon();
    }

currentPokemon = getRandomPokemon();
displayPokemon();    



