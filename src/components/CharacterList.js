import React from 'react';
import CharacterCard from './CharacterCard';

//CharacterList pinta un listado

const CharacterList = (props) => {
  const characterItem = props.characters.map((character) => {
    return (
      <CharacterCard
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        specie={character.species}
        imageURL={character.imageURL}
      />
    );
  });
  return <ul className='character__list'>{characterItem}</ul>;
};

export default CharacterList;
