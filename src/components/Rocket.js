import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { rocket, reserveRocket, cancelRocket } = props;
  const { rocketName, description, image } = rocket;
  return (
    <li className="w-100 my-2 d-flex rocket">
      <img src={image} alt={rocketName} />
      <div className="ms-3">
        <h4 className="mx-0 my-1">{rocketName}</h4>
        <p className="a">{description}</p>
        <button type="button" className="btn btn-primary" onClick={() => { reserveRocket(rocket.id); }}>Reserve Rocket</button>
        <button type="button" className="btn btn-outline-primary" onClick={() => { cancelRocket(rocket.id); }}>Cancel Reservation</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.instanceOf(Object).isRequired,
  reserveRocket: PropTypes.func.isRequired,
  cancelRocket: PropTypes.func.isRequired,
};

export default Rocket;
