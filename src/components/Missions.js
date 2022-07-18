// /*eslint-disable*/

import React, { useEffect } from 'react';
import axios from 'axios';
import Singlemission from './singlemission';

const Missions = () => {
  const fetchmissions = async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    console.log(response);
  };

  useEffect(() => {
    fetchmissions();
  }, []);

  return (
    <div className="mt-5">
      <Singlemission />
    </div>
  );
};
export default Missions;
