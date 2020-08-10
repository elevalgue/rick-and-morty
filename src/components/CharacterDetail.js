import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/App.css';

const CharacterDetail = (props) => {
  console.log(props);
  const { image, name, status, species, origin, episode } = props.character;

  return (
    <div className='character__detail'>
      <Link to='/' className='character__detail__link'>
        <p className='button_back'>Volver</p>
      </Link>

      <div className='character__detail__wrapper'>
        <img className='image__character' src={image} alt={name}></img>

        <ul className='character__detail_info'>
          <h2 className='character__detail__name'>{name}</h2>
          <li className='details character__detail__status'>
            Status: {`${status}` === 'Dead' ? `${status} 💀` : `${status} ❤️`}
          </li>
          <li className='details character__detail__species'>
            Specie: {''}
            {`${species}` === 'Alien' ? `${species} 👽` : `${species} 😎`}
          </li>
          <li className='details character__detail__origin'>
            {' '}
            Origin: {origin}
          </li>
          <li className='details character__detail__episodes'>
            {' '}
            Episodes: {episode}
          </li>
        </ul>
      </div>
    </div>
  );
};
CharacterDetail.propTypes = {
  character: PropTypes.object,
};

export default CharacterDetail;
