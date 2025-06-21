import { useSelector, useDispatch } from "react-redux"
import { incrementVotes } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(incrementVotes(id))
  }

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => a.votes - b.votes).reverse()

  return (
    <div>
      <h2>Anecdotes</h2>
      {
      !filter 
      ? sortedAnecdotes.map(a =>
        <div key={a.id}>
          <div>
            {a.content}
          </div>
          <div>
            has {a.votes}
            <button onClick={() => vote(a.id)}>vote</button>
          </div>
        </div>
      )
      : sortedAnecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
      .map(a=>
          <div key={a.id}>
          <div>
            {a.content}
          </div>
          <div>
            has {a.votes}
            <button onClick={() => vote(a.id)}>vote</button>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default AnecdoteList