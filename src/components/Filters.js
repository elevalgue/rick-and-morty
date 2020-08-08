import React from 'react';

const Filters = (props) => {
  const handleFilterName = (event) => {
    event.preventDefault();

    props.handleFilterName({
      key: event.currentTarget.id,
      value: event.currentTarget.value,
    });
  };

  return (
    <>
      <form>
        <label htmlFor='search-input'>
          Busca un personaje:
          <input
            type='text'
            id='filterName'
            name='name'
            placeholder='Rick'
            value={props.filterName}
            onChange={handleFilterName}
          />
        </label>
      </form>
    </>
  );
};

export default Filters;
