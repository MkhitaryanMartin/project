import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';

export const getUser = createAsyncThunk(
   'getUser',
   async () => {
      try { 
         const { data } = await $api.get(`/users?_limit=6`);
         return data;
      } catch (e) {
        console.log(e)
      }
   },
);

export const deleteUser = createAsyncThunk(
   'deleteUser',
   async (payload) => {
      try {
       
          await $api.get(`/users/${payload}`);
         return payload;
      } catch (e) {
        console.log(e)
      }
   },
);
