import axios from "axios";
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const postNewAnecdote = async (anecdote) => {
  const anecdoteObject = {
    content: anecdote,
    votes: 0
  }
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const incrementVote = async (id) => {
  const anecdotes = await getAll()
  const votedAnecdote = anecdotes.find(a => a.id === id)
  votedAnecdote.votes += 1
  const response = await axios.put(`${baseUrl}/${id}`, votedAnecdote)
  return response.data
}

export default { getAll, postNewAnecdote, incrementVote }