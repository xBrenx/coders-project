import React, { useEffect } from 'react';
import { getPopularMovies } from '../../../redux/actions/populars';
import type { AppDispatch } from '../../../actions';
import { useDispatch } from 'react-redux';

export default function Home() {
  const dispatch =  useDispatch<AppDispatch>();

  useEffect(() => {
    console.log("soy useEffect")
    dispatch(getPopularMovies());
  }, [dispatch]);

  return (
    <div>home</div>
  );
}
