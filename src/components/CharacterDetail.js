import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <div className='character__detail'>
      <Link to='/' className='character__detail__link'>
        Volver
      </Link>

      <div className='character__detail__wrapper'>
        <img src={props.image} alt={props.name}></img>

        <ul className='character__detail_info'>
          <h2 className='character__detail__name'>{props.name}</h2>
          <li className='character__detail__status'>
            {props.status}Status:{' '}
            {`${props.status}` === 'Dead'
              ? `${props.status} 💀`
              : `${props.status} 😎`}
          </li>
          <li className='character__detail__species'>
            {''}
            {`${props.species}` === 'Alien'
              ? `${props.species} 👽`
              : `${props.species} 👫🏻`}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CharacterDetail;
