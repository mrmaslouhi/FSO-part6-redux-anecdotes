import { makeAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import { setMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(makeAnecdote(anecdote))
    dispatch(setMessage(`Added '${anecdote}'`))
    setTimeout(() =>
      dispatch(setMessage(null))
      , 3000)
  }
  return (
    <div>
      <h2>Make new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AnecdoteForm