/*eslint-disable*/

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Singlemission from './MissionList';
import { Setmissions } from '../Redux/missions-redux';

const Missions = () => {
  // const mission = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Setmissions());
  }, []);

  // console.log('missions :', mission);
  return (
    <div className='mt-5'>
      <Singlemission />
    </div>
  );
};
export default Missions;
