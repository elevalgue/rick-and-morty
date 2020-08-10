import React from 'react';

const Filters = (props) => {
  const handleFilterName = (event) => {
    const data = {
      key: 'name',
      value: event.currentTarget.value,

      // es un objeto con dos valores
    };
    props.handleFilterName(data);
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

//Estoy enviando datos desde Filters a App por lifting
