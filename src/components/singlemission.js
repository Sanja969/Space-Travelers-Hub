import React from 'react';
// /*eslint-disable*/
import { useSelector } from 'react-redux';

function Singlemission() {
  const allmission = useSelector((state) => state.missions);

  const rinderlist = allmission.map((mission) => (
    <tbody key={mission.mission_id}>
      <tr>
        <th className="name ">{mission.mission_name}</th>
        <td className="description">
          <p className="p">{mission.description}</p>
        </td>
        <td className="member">NOT A MEMBER</td>
        <td>
          <button className="button" type="button">
            Join mission
          </button>
        </td>
      </tr>
    </tbody>
  ));

  // console.log(allmission);

  return (
    <div className="single">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">state</th>
            <th scope="col">Submition mission</th>
          </tr>
        </thead>
        {rinderlist}
      </table>
    </div>
  );
}

export default Singlemission;
