import React from 'react';
import { useSelector } from 'react-redux';

function Mymissions() {
  const allmission = useSelector((state) => state.missions);

  return (
    <div className="myRockets w-50">
      <h3>My Missions</h3>
      <ul className="ps-0">
        {allmission
          .filter((missions) => missions.reserved)
          .map((missions) => (
            <li
              key={missions.mission_id}
              className="list-unstyled border myRocket ps-3 pt-2"
            >
              {missions.mission_name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Mymissions;
