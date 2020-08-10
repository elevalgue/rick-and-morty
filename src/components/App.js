import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/App.css';
import Logo from '../images/logo.png';
import getDataFromApi from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    getDataFromApi().then((character) => {
      const orderedObject = character.sort((a, b) => {
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

  //eliminado el bucle infinito con los corchetes

  // event handlers
  const handleFilterName = (data) => {
    if (data.key === 'name') {
      setFilterName(data.value);
    }
  };

  //eliminado el localStorage porque en este tipo de app no es útil

  const renderFilteredCharacters = () => {
    return characters.filter((character) =>
      character.name.toUpperCase().includes(filterName.toUpperCase())
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
          />
          <CharacterList characters={renderFilteredCharacters()} />
        </Route>
        <Route path='/character/:id' render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
