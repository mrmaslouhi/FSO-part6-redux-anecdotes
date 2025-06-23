import { createSlice, current } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'

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
    appendAnecdotes(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { appendAnecdotes, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const makeAnecdote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.postNewAnecdote(anecdote)
    dispatch(appendAnecdotes(newAnecdote))
  }
}

export function incrementVotes(id) {
      const votedAnecdote = state.find(a => a.id === action.payload)
      votedAnecdote.votes += 1
}
export default anecdoteSlice.reducer