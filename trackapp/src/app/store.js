import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import trackReducer from '../features/track/trackSlice';

export const store = configureStore({
  reducer: {
    track: trackReducer
  },
});
