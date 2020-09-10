import React from 'react';

const Filters = (props) => {
  //por lifting paso esta info al componente principal
  const handleFilterName = (event) => {
    const data = {
      //en un solo objeto envío estas dos informaciones
      key: 'name',
      value: event.currentTarget.value,
    };
    props.handleFilterName(data);
  };

  const handleFilterLocation = (event) => {
    const data = {
      //en un solo objeto envío estas dos informaciones
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
            onChange={handleFilterName} //escucho el evento en onChange (función sin ejecutar)
          />
        </label>
      </form>
    </>
  );
};

export default Filters;
