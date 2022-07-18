import React from 'react';
import { useSelector } from 'react-redux';

function MyRockets() {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="myRockets w-50">
      <h3>My Rockets</h3>
      <ul className="ps-0">
        {rockets.filter((rocket) => rocket.reserved)
          .map((rocket) => (
            <li key={rocket.id} className="list-unstyled border myRocket ps-3 pt-2">
              {rocket.rocketName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MyRockets;
