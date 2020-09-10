const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        //recorro el array y retorno los datos del objeto con los que me interesa trabajar
        return {
          //
          id: character.id,
          name: character.name,
          status: character.status,
          specie: character.species,
          image: character.image,
          origin: character.origin.name,
          episode: character.episode.length,
          location: character.location.name,
        };
      });
    });
};

export default getDataFromApi;
