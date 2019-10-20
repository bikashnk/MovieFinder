import axios from 'axios';
import {MOVIEACTION} from '../actions/action.jsx';

export const fetchMovieDetails = (movieName, callback) => {
  return dispatch => {
    axios.get(`https://itunes-search-iypahdbpmn.now.sh/api/search?media=all&term=${movieName}`)
    .then(res => {
      callback(false);
      dispatch({
        type: MOVIEACTION.FETCH_MOVIE_DETAILS,
        data: res.data
      });
    })
    .catch(err => {
      callback(false);
      console.log('Error');
    });
  }
}