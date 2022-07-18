import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets, bookRocket } from '../Redux/rocket-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const reserveRocket = (id) => dispatch(bookRocket(id));

  return (
    <div className="d-flex flex-column align-items-center rockets">
      <RocketList rockets={rockets} reserveRocket={reserveRocket} />
    </div>
  );
};

export default Rockets;
