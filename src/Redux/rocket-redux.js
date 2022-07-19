const url = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const BOOK_ROCKET = 'BOOK_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';
const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.rockets];
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
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
    reserved: false,
  }));

  dispatch({
    type: GET_ROCKETS,
    rockets,
  });
};

export const bookRocket = (id) => ({ type: BOOK_ROCKET, id });

export const cancelRocket = (id) => ({ type: CANCEL_ROCKET, id });
