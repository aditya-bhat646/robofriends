import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

function CardList({ robots }) {
  return (
    <>
      {robots.map((robot) => (
        <Card
          key={robot.name}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </>
  );
}

CardList.propTypes = {
  robots: PropTypes.instanceOf(Array),
};

CardList.defaultProps = {
  robots: [{ name: 'defaultName', email: 'defaultEmail', id: 'defaultId' }],
};

export default CardList;
