import { createSlice, current } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    makeAnecdote(state, action) {
      state.push(action.payload)
    },
    incrementVotes(state, action) {
      const votedAnecdote = state.find(a => a.id === action.payload)
      votedAnecdote.votes += 1
    },
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { makeAnecdote, incrementVotes, appendAnecdotes, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer