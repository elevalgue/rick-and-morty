const getDataFromApi = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          status: character.status,
          specie: character.species,
          image: character.image,
          origin: character.origin.name,
          // location: character.location.name,
          episode: character.episode.length,
        };
      });
    });
};

export default getDataFromApi;

//Limpio aquí los datos
