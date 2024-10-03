import { combineReducers, configureStore } from '@reduxjs/toolkit'
import users from './users'
import profile from './profile'
import modal from './modal'


const reducer = combineReducers({
    users,
    profile,
    modal
})



const store = configureStore({
   reducer,
})


export default store
