import React from 'react';
import PropTypes from 'prop-types';

function Scroll({ children }) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '2px solid black',
        height: '700px',
      }}
    >
      {children}
    </div>
  );
}

Scroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Scroll;
