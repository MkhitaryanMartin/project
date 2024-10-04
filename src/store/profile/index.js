import { createSlice } from '@reduxjs/toolkit'
import { getProfile, patchProfile } from './operations'

const initialState = {
  profile: {},
  loader: true,
  patchLoader: false
}

export const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.profile = payload;
      })
      .addCase(getProfile.pending, (state) => {
        state.loader = true;
      })
      .addCase(getProfile.rejected, (state) => {
        state.loader = false;
      })
      .addCase(patchProfile.fulfilled, (state, { payload }) => {
        state.patchLoader = false;
        state.profile = {
            ...state.profile,
            ...payload,
            address: {
                ...state.profile.address,
                city: payload.city, 
            },
            company: {
                ...state.profile.company,
                name: payload.companyName, 
            },
        };
    })
      .addCase(patchProfile.pending, (state) => {
        state.patchLoader = true;
      })
      .addCase(patchProfile.rejected, (state) => {
        state.patchLoader = false;
      })

  },
})


export default profile.reducer
