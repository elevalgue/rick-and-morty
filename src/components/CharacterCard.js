import React from 'react';

const CharacterCard = (props) => {
  console.log(props.CharacterCard);

  const { name, image, species } = props; //NECESITO ID AQUÍ?

  return (
    <li className='characters'>
      <img src={image} alt={name}></img>
      <div className='character__card'>
        <h2 className='characters__name'>{name}</h2>
        <p className='chacter__specie'>{species}</p>
      </div>
    </li>
  );
};
export default CharacterCard;
