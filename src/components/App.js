import React, { useEffect, useState } from 'react';
import '../stylesheets/App.css';
import Logo from '../images/logo.png';
import getDataFromApi from '../services/api';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  // };
  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    localStorage.setItem('filterName', JSON.stringify(filterName));
  }, [filterName]);

  const handleFilterName = (data) => {
    setFilterName(data.value);
  };

  //render

  return (
    <>
      <div className='app'>
        <h1 className='title'>Ricky and Morty's app</h1>
        <img className='title__img' src={Logo} alt='Rick and Morty logo' />
        <Filters filterName={filterName} handleFilterName={handleFilterName} />
        <CharacterList characters={characters} />
        <CharacterDetail image='' status='' specie='' />
      </div>
    </>
  );
};

export default App;
