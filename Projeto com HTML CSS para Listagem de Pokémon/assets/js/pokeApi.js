const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
   
    return fetch(url)
    .then((response) => response.json()) //retorna o fetch
    .then((jsonBody) => jsonBody.results) //retorna o then
    .catch((error) => console.log(error))   //retorna o erro se der errado
}