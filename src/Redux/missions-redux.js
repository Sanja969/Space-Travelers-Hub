/*eslint-disable*/

// Action-type
const SET_MISSIONS = 'SET_MISSIONS ';

// Action-creator
export const Setmissions = (mission) => ({
  type: SET_MISSIONS,
  payload: mission,
});

// Reducer
const initstate = {
  mission: [],
};

const missionsReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case SET_MISSIONS:
      return { ...state, mission: payload };
    default:
      return state;
  }
};

export default missionsReducer;
