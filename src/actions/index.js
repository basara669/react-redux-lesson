import axios from "axios";

export const READ_EVENTS = "READ_EVENTS";
export const CREATE_EVENT = "CREATE _EVENT";

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1";

const QUERYSTRING = "?token=token123";

//オブジェクトのこと
//actionを返すものActionCreator

export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`);
  console.log(response);
  dispatch({ type: READ_EVENTS, response });
};

export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values);
  console.log(response);
  dispatch({ type: CREATE_EVENT, response });
};
