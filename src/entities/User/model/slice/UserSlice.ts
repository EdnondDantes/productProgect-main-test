
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserSchema, UserType } from '../types/UserTypes'
import { init } from 'i18next'
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localStorage'

const initialState: UserSchema = {
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { 
    setAuthData: (state, action: PayloadAction<UserType>) => {
      state.authData = action.payload
    },

    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },

    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    }

   },
})

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
