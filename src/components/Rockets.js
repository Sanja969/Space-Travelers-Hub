import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../Redux/rocket-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column align-items-center rockets">
      <RocketList rockets={rockets} />
    </div>
  );
};

export default Rockets;
