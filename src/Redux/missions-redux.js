/*eslint-disable*/

// Action-type
const SET_MISSIONS = 'SET_MISSIONS ';

// Action-creator
export const Setmissions = (mission) => ({
  type: SET_MISSIONS,
  payload: mission,
});

// Reducer
const initstate = [];

const missionsReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
