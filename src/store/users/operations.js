import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';

export const getUser = createAsyncThunk(
   'getUser',
   async (payload, { dispatch }) => {
      try {
       
         const { data } = await $api.get(`/users`);
         return data;
      } catch (e) {
        console.log(e)
      }
   },
);
