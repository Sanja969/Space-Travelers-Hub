import PropTypes from 'prop-types';
import React from 'react';
import Rocket from './Rocket';

const RocketList = (props) => {
  const { rockets, reserveRocket } = props;
  return (
    rockets.map((rocket) => (
      <Rocket
        key={rocket.id}
        rocket={rocket}
        reserveRocket={reserveRocket}
      />
    ))
  );
};

RocketList.propTypes = {
  rockets: PropTypes.instanceOf(Array).isRequired,
};

export default RocketList;
