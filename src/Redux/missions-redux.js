/*eslint-disable*/

// Action-type
const SET_MISSIONS = 'SET_MISSIONS ';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

// Action-creator
export const Setmissions = (mission) => ({
  type: SET_MISSIONS,
  payload: mission,
});

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
      return [...action.payload];
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) {
          return mission;
        }
        return { ...mission, website: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.mission_id) {
          return mission;
        }
        return { ...mission, website: false };
      });

    default:
      return state;
  }
};

export default missionsReducer;
