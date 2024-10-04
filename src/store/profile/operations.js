import { createAsyncThunk } from '@reduxjs/toolkit';
import $api from '../../http';
import { showModal } from '../modal';

export const getProfile = createAsyncThunk(
   'getProfile',
   async (payload, { dispatch }) => {
      try {
       
         const { data } = await $api.get(`/users/${payload}`);
         return data;
      } catch (e) {
        console.log(e)
      }
   },
);

export const patchProfile = createAsyncThunk(
   'patchProfile',
   async (payload, { dispatch }) => {
      try {
           await $api.patch(`/users/${payload?.id}`, payload.data);
           dispatch(
            showModal({
               modalType: 'NOTIFICATION',
               modalProps: {text:"Изменения сохранены!"}
               
            }),
         );
         return payload.data;
      } catch (e) {
        console.log(e)
      }
   },
);
