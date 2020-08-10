import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const propsCharacters = props.characters;
  const characterItem = propsCharacters.map((character) => {
    return (
      <CharacterCard
        //corrección valor key
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        specie={character.specie}
        image={character.image}
      />
    );
  });
  return <ul className='character__list'>{characterItem}</ul>;
};

export default CharacterList;
