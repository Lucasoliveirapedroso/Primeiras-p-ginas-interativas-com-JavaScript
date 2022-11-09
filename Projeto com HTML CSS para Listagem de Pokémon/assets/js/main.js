function convertPokemonTypesToLi(pokemonsTypes){
    return pokemonsTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
            <li class="pokemon"> 
                <span class="number">#${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                    ${convertPokemonTypesToLi(pokemon.types).join('')}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" 
                    alt="${pokemon.name}">
                </div>
            </li> 
    `
}
const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml

})

// versão que utilizava o for


//pokeApi.getPokemons().then((pokemons = []) => {
  //      for (let i = 0; i < pokemons.length; i++) {
    //        const pokemon = pokemons[i];
      //      pokemonList.innerHTML += convertPokemonToLi(pokemon)
        //}
    // })
    