import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchTrackData} from './trackAPI';

const initialState = {
    title: "tester",
    tracks: [],
}
export const getTrackDataAsync = createAsyncThunk(
  'track/fetchTrackData',
  async () => {
    const response = await fetchTrackData();
    return response.data;
  }
)

  export const trackSlice = createSlice({
    name: 'track',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        }  ,
        
        getTrackData: (state, action) => {
          state.tracks = action.payload;
        }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getTrackDataAsync.fulfilled, (state, action) => {
          state.tracks = action.payload;
        });
    },
  });


  export const { changeName, getTrackData } = trackSlice.actions;
  
  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectTitle = (state) => state.track.title;
  export const selectTracks = (state) => state.track.tracks;
  
  export default trackSlice.reducer;
  