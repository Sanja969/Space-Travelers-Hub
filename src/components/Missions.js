/*eslint-disable*/

import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Singlemission from './singlemission';
import { Setmissions } from '../Redux/missions-redux';

const Missions = () => {
  const mission = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const fetchmissions = async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');

    dispatch(Setmissions(response.data));
    // console.log(response.data);
  };

  useEffect(() => {
    fetchmissions();
  }, []);

  // console.log('missions :', mission);
  return (
    <div className='mt-5'>
      <Singlemission />
    </div>
  );
};
export default Missions;
