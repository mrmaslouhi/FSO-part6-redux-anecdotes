import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setMessage(state, action) {
      return action.payload
    }
  }
})

export const { setMessage } = notifSlice.actions
export default notifSlice.reducer