/*eslint-disable*/

// Action-type
const SET_MISSIONS = 'SET_MISSIONS ';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

export const Joinmission = (mission_id) => ({ type: JOIN_MISSION, mission_id });

export const leavemission = (mission_id) => ({
  type: LEAVE_MISSION,
  mission_id,
});

// Reducer
const initstate = [];

const missionsReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return [...action.missions];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });

    default:
      return state;
  }
};

const url = 'https://api.spacexdata.com/v3/missions';

export const Setmissions = () => async (dispatch) => {
  const response = await fetch(url);
  const json = await response.json();
  const missions = json.map((element) => ({
    mission_id: element.mission_id,
    mission_name: element.mission_name,
    description: element.description,
    reserved: false,
  }));

  dispatch({
    type: SET_MISSIONS,
    missions,
  });
};

export default missionsReducer;
