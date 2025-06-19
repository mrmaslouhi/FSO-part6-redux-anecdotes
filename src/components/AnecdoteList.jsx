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
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(incrementVotes(id))
  }

  sortAnecdoteVotesDescendingly(anecdotes)
  return (
    <div>
      <h2>Anecdotes</h2>
      {
      !filter 
      ? anecdotes.map(a =>
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
      : anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
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