/*eslint-disable*/
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Joinmission } from '../Redux/missions-redux';
import { leavemission } from '../Redux/missions-redux';

function Singlemission() {
  const allmission = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const Jooinmission = (mission_id) => dispatch(Joinmission(mission_id));
  const leeavemission = (mission_id) => dispatch(leavemission(mission_id));
  let count = 0;
  const rinderlist = allmission.map(
    (mission) => (
      (count += 1),
      (
        <tbody
          key={mission.mission_id}
          className={count % 2 === 0 ? 'll' : 'bg-white'}
        >
          <tr>
            <th className='name '>{mission.mission_name}</th>
            <td className='description'>
              <p className='p'>{mission.description}</p>
            </td>
            <td className='member'>
              {!mission.reserved ? (
                <p className='center gray'>NOT MEMBER</p>
              ) : (
                <p className='center bg-primary text-white badge my-0'>
                  Active member
                </p>
              )}
            </td>
            <td>
              {!mission.reserved ? (
                <button
                  onClick={() => Jooinmission(mission.mission_id)}
                  className='button join both'
                  type='button'
                >
                 Join mission
                </button>
              ) : (
                <button
                  onClick={() => leeavemission(mission.mission_id)}
                  className='button acctive both'
                  type='button'
                >
                  Leave mission
                </button>
              )}
            </td>
          </tr>
        </tbody>
      )
    )
  );

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
