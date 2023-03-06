import axios from 'axios';
import type { AppDispatch } from '../../actions';
import { getAllPopulars } from '../reducers/moviesSilice';

export const getPopularMovies = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get("http://localhost:3001/list/populars")
    .then(res => res.data)
    console.log("holi")
    dispatch(getAllPopulars(response));
  } catch (error) {
    console.log(error);
  }
};