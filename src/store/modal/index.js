import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   modalType: '',
   modalProps: {},
   registerModalProps: true,
};

export const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      showModal: (state, { payload }) => {
         state.modalType = payload.modalType;
         state.modalProps = payload?.modalProps;
      },
      hideModal: () => ({ ...initialState }),
      setRegisterModalProps: (state, { payload }) => {
         state.registerModalProps = !state.registerModalProps;
      },
   },
});

export const { showModal, hideModal, setRegisterModalProps } = modalSlice.actions;
export default modalSlice.reducer;
