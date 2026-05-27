function Tile({ letter = '', status = '' }) {
  return (
    <div className={`tile ${status}`}>
      {letter.toUpperCase()}
    </div>
  )
}

export default Tile