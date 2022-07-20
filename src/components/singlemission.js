import React from 'react';
/*eslint-disable*/
import { useSelector, useDispatch } from 'react-redux';
import { Joinmission } from '../Redux/missions-redux';

function Singlemission() {
  const allmission = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const handleClick = (mission_id) => dispatch(Joinmission(mission_id));

  const rinderlist = allmission.map((mission) => (
    <tbody key={mission.mission_id}>
      <tr>
        <th className='name '>{mission.mission_name}</th>
        <td className='description'>
          <p className='p'>{mission.description}</p>
        </td>
        <td className='member'>
          {mission.website === true ? (
            <p className='center bg-primary text-white badge my-0'>
              Active member
            </p>
          ) : (
            <p className='center gray'>NOT MEMBER</p>
          )}
        </td>
        <td>
          <button
            onClick={() => handleClick(mission.mission_id)}
            className='button'
            type='button'
          >
            {mission.website === true ? (
              <p className='active both'>Active member</p>
            ) : (
              <p className='join both'>Join mission</p>
            )}
          </button>
        </td>
      </tr>
    </tbody>
  ));

  // console.log(allmission);

  return (
    <div className='single'>
      <table className='table table-bordered table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Mission</th>
            <th scope='col'>Description</th>
            <th scope='col'>state</th>
            <th scope='col'>Submition mission</th>
          </tr>
        </thead>
        {rinderlist}
      </table>
    </div>
  );
}

export default Singlemission;
