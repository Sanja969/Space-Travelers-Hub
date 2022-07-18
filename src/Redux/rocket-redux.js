const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.rockets];
    default:
      return state;
  }
};

export default rocketsReducer;

export const getRockets = () => async (dispatch) => {
  const response = await fetch(url);
  const json = await response.json();
  const rockets = json.map((element) => ({
    id: element.id,
    rocketName: element.rocket_name,
    description: element.description,
    image: element.flickr_images[0],
  }));

  dispatch({
    type: GET_ROCKETS,
    rockets,
  });
};
