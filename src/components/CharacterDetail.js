import React from 'react';

function CharacterDetail(props) {
  const { name, species, image, status } = props;
  return (
    <>
      <div className='character__detail'>
        <div className='character__detail__wrapper'>
          <img src={image} alt={name}></img>
          <ul className='character__detail_info'>
            <h2 className='character__detail__name'>{name}</h2>
            <li className='character__detail__status'>{status}</li>
            <li className='character__detail__species'>{species}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default CharacterDetail;
