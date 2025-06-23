import { makeAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(makeAnecdote(anecdote))
    dispatch(setNotification(`Added '${anecdote}'`, 5))
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