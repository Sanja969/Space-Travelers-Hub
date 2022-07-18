// Action-type
const SET_MISSIONS = 'SET_MISSIONS ';

// Action-creator
export const setmissions = (mission) => ({
  type: SET_MISSIONS,
  payload: mission,
});

// Reducer
const initstate = [
  {
    mission_id: 1,
    Missionname: 'Abdo',
    description: 'kjhgfds.,mnbvcxoiuygtrfe,mnbvfdsdfghjklkjhgfdsdfgjkkjhgf',
  },
];

const missionsReducer = (state = initstate, action) => {
  switch (action.type) {
    case SET_MISSIONS:
      return state;
    default:
      return state;
  }
};

export default missionsReducer;
