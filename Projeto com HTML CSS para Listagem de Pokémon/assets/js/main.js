const pokemonList = document.getElementById('pokemonList')

const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 906

const limit = 8 
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `
                <li class="pokemon ${pokemon.type}"> 
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
    
                    <div class="detail">
                        <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${pokemon.type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" 
                        alt="${pokemon.name}">
                    </div>
                </li>
            `
        ).join('')
        pokemonList.innerHTML += newHtml
    })
}
loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    
    const qtdNxtPage = offset + limit

    if(qtdNxtPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }

    loadPokemonItens(offset, limit)
})

// versão que utilizava o for


//pokeApi.getPokemons().then((pokemons = []) => {
  //      for (let i = 0; i < pokemons.length; i++) {
    //        const pokemon = pokemons[i];
      //      pokemonList.innerHTML += convertPokemonToLi(pokemon)
        //}
    // })
    