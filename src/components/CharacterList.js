import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = (props) => {
  const propsCharacters = props.characters; //así cada character obtiene sus datos correspondientes
  const characterItem = propsCharacters.map((character) => {
    //recorro el array con un map
    return (
      <CharacterCard
        //corrección valor key
        key={character.id} //key es un atributo especial añadido dado que estamos trabajando con listas
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

//en este componente paso los characters > paso los datos por props al componente principal
