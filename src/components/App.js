import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.css';
import Logo from '../images/logo.png';
import getDataFromApi from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]); //characters almacena los datos del estado // setCharacters es la función con la que modificamos y re-rendiramos el estado //los datos iniciales están vacíos []
  const [filterName, setFilterName] = useState(''); //guardo los datos del evento en el estado
  const [filterLocation, setFilterLocation] = useState('');

  useEffect(() => {
    //recibe una función
    getDataFromApi().then((character) => {
      //llamo al servicio y ejecuto el fetch
      const orderedObject = character.sort((a, b) => {
        //indico que la propiedad name se ordene alfabeticamente
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      setCharacters(orderedObject);
    });
  }, []);

  // event handlers 
  //escucho el evento del campo de texto
  const handleFilterName = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  };

  const handleFilterLocation = (data) => {
    if (data.key === 'location') {
      setFilterLocation(data.value);
    }
  };

  const renderFilteredCharacters = () => {
    return characters
      .filter((character) =>
        character.name.toUpperCase().includes(filterName.toUpperCase())
      )
      .filter((character) =>
        character.location.toUpperCase().includes(filterLocation.toUpperCase())
      );
  };

  const renderCharacterDetail = (props) => {
    const characterId = parseInt(props.match.params.id);
    const foundCharacter = characters.find(
      (character) => character.id === characterId
    );
    if (foundCharacter === undefined) {
      return <p className='characterNotFound'>Personaje no encontrado</p>;
    } else {
      return <CharacterDetail character={foundCharacter}></CharacterDetail>;
    }
  };

  return (
    <div className='app'>
      <img className='title__img' src={Logo} alt='Rick and Morty logo' />
      <Switch>
        <Route exact path='/'>
          <Filters
            filterName={filterName}
            handleFilterName={handleFilterName}
            filterLocation={filterLocation}
            handleFilterLocation={handleFilterLocation}
          />
          <CharacterList characters={renderFilteredCharacters()} />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
