import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bookRocket, cancelRocket } from '../Redux/rocket-redux';
import RocketList from './RocketList';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRockets());
  // }, [dispatch]);

  const reserveRocket = (id) => dispatch(bookRocket(id));
  const cancelReservation = (id) => dispatch(cancelRocket(id));

  return (
    <div className="d-flex flex-column align-items-center rockets">
      <RocketList
        rockets={rockets}
        reserveRocket={reserveRocket}
        cancelRocket={cancelReservation}
      />
    </div>
  );
};

export default Rockets;
