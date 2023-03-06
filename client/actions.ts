import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/reducers/moviesSilice';

const store = configureStore({
  reducer: rootReducer,
  // otras opciones del store...
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
