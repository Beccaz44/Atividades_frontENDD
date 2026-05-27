import Row from './Row'

function Board({ guesses, currentGuess, evaluations, currentRow }) {
  const rows = Array(6).fill('')

  return (
    <div className="board">
      {rows.map((_, i) => (
        <Row
          key={i}
          guess={i === currentRow ? currentGuess : (guesses[i] || '')}
          statuses={evaluations[i] || []}
          isActive={i === currentRow}
        />
      ))}
    </div>
  )
}

export default Board