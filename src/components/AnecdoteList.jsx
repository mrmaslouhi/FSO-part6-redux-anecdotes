import { useSelector, useDispatch } from "react-redux"

const sortAnecdoteVotesDescendingly = (anecdotes) => {
    const sortedAnecdotes = anecdotes.sort((a, b) => a.votes - b.votes).reverse()
}

const incrementVotes = (id) => {
  return {
    type: 'VOTE',
    payload: {
      id: id
    }
  }
}

const AnecdoteList = () => {
  const anecdotes = useSelector(anecdote => anecdote)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(incrementVotes(id))
  }

  sortAnecdoteVotesDescendingly(anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList