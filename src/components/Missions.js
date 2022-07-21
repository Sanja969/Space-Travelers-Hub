/*eslint-disable*/

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Singlemission from './MissionList';
import { Setmissions } from '../Redux/missions-redux';

const Missions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Setmissions());
  }, []);

  return (
    <div className='mt-5'>
      <Singlemission />
    </div>
  );
};
export default Missions;
