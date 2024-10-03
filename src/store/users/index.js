import { createSlice } from '@reduxjs/toolkit'
import { getUser } from './operations'

const initialState = {
  userData: [],
  archiveData: [],
  loader: true
}

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, { payload }) => {
      if (payload.archive) {
        const userToArchive = state.userData.find((user) => user?.id === payload?.id);
        if (userToArchive) {
          state.archiveData.push(userToArchive);
        }
      }
      state.userData = state.userData.filter((user) => user?.id !== payload?.id);
    },
    activeUserdata: (state, { payload }) => {
      const userToArchive = state.archiveData.find((user) => user?.id === payload);
      if (userToArchive) {
        state.userData.push(userToArchive);
        state.archiveData = state.archiveData.filter((user) => user?.id !== payload)
      }


    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.userData = payload;
      })
      .addCase(getUser.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(getUser.rejected, (state, {payload}) => {
        state.loader =  false;
     })
  },
})

export const { setUsersData, activeUserdata } = users.actions;
export default users.reducer
