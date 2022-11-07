import React from 'react';
import PropTypes from 'prop-types';

function Searchbox({ searchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-light-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
}

Searchbox.propTypes = {
  searchChange: PropTypes.func,
};

Searchbox.defaultProps = {
  searchChange() {
    // eslint-disable-next-line no-console
    console.log('Searchbox-searchChange-missing');
  },
};

export default Searchbox;
