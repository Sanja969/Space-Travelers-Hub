/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Joinmission } from '../Redux/missions-redux';
import { leavemission } from '../Redux/missions-redux';

function Singlemission() {
  const allmission = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const handleClick = (mission_id) => dispatch(Joinmission(mission_id));
  const handleClick2 = (mission_id) => dispatch(leavemission(mission_id));

  const rinderlist = allmission.map((mission) => (
    <tbody key={mission.mission_id}>
      <tr>
        <th className='name '>{mission.mission_name}</th>
        <td className='description'>
          <p className='p'>{mission.description}</p>
        </td>
        <td className='member'>
          {mission.website === true ? (
            <p className='center gray'>NOT MEMBER</p>
          ) : (
            <p className='center bg-primary text-white badge my-0'>
              Active member
            </p>
          )}
        </td>
        <td>
          {mission.website ? (
            <button
              onClick={() => handleClick2(mission.mission_id)}
              className='button'
              type='button'
            >
              <p className='join both'>Join mission</p>
            </button>
          ) : (
            <></>
          )}
          {mission.website === false ? (
            <button
              onClick={() => handleClick(mission.mission_id)}
              className='button'
              type='button'
            >
              <p className='acctive both'>Leave mission</p>
            </button>
          ) : (
            <></>
          )}
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
