import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const notifSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setMessage(state, action) {
      return action.payload
    }
  }
})

export const setNotification = (message, displayTime) => {
    return dispatch => {
      dispatch(setMessage(message))
      setTimeout(() => 
      dispatch(setMessage(null))
      , displayTime * 1000)
    }
}

export const { setMessage } = notifSlice.actions
export default notifSlice.reducer