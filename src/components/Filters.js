import React from 'react';

const Filters = (props) => {
  //por lifting paso esta info al componente principal
  const handleFilterName = (event) => {
    const data = {
      key: 'name',
      value: event.currentTarget.value,
    };
    props.handleFilterName(data);
  };

  const handleFilterLocation = (event) => {
    const data = {
      key: 'location',
      value: event.currentTarget.value,
    };
    props.handleFilterLocation(data);
    console.log(props.handleFilterLocation);
  };

  return (
    <>
      <form>
        <label htmlFor='name'>
          Busca un personaje:
          <input
            className='input-form'
            type='text'
            id='name'
            name='name'
            placeholder='Morty'
            value={props.filterName}
            onChange={handleFilterName}
          />
        </label>
      </form>
    </>
  );
};

export default Filters;
