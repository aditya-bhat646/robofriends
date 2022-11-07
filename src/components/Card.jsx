import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ name, email, id }) {
  return (
    <div className="Card-body br3 ma2 bg-light-green pa2 grow shadow-2">
      <img
        src={`https://robohash.org/${id}?size=200x200`}
        alt={`${name}`}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;
