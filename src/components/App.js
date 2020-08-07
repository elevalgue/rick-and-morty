import React from 'react';
import '../stylesheets/App.css';
import Logo from '../images/logo.png';
import getDataFromApi from '../services/api';

getDataFromApi().then((data) => {
  console.log(data);
});

function App() {
  return (
    <div className='app'>
      <h1 className='title'>
        <img className='title__img' src={Logo} alt='Rick and Morty logo' />
      </h1>
    </div>
  );
}

export default App;
