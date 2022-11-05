

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon"> 
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="details">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" 
                    alt="${pokemon.name}">
                </div>
            </li> 
    `
}
const pokemonList = document.getElementById('pokemonList')



pokeApi.getPokemons().then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon)
        }
     })
    .catch((error) => console.log(error))   //retorna o erro se der errado