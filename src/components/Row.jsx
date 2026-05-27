import Tile from './Tile'

function Row({ guess = '', statuses = [], isActive = false }) {
  const tiles = Array(5).fill('')

  return (
    <div className="row">
      {tiles.map((_, i) => (
        <Tile
          key={i}
          letter={guess[i] || ''}
          status={statuses[i] || (isActive && guess[i] ? 'active' : '')}
        />
      ))}
    </div>
  )
}

export default Row