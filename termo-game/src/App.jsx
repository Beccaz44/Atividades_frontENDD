import { useState, useEffect, useCallback } from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { getRandomWord, WORDS } from './utils/words'
import { evaluateGuess } from './utils/gameLogic'
import './App.css'

function App() {
  const [answer, setAnswer] = useState(() => getRandomWord())
  const [guesses, setGuesses] = useState(Array(6).fill(''))
  const [evaluations, setEvaluations] = useState(Array(6).fill(null))
  const [currentGuess, setCurrentGuess] = useState('')
  const [currentRow, setCurrentRow] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [letterStatuses, setLetterStatuses] = useState({})

  const handleKey = useCallback((key) => {
    if (gameOver) return

    if (key === '⌫' || key === 'BACKSPACE') {
      setCurrentGuess(g => g.slice(0, -1))
      return
    }

    if (key === 'ENTER') {
      if (currentGuess.length !== 5) {
        alert('Palavra deve ter 5 letras!')
        return
      }
      if (!WORDS.includes(currentGuess)) {
        alert('Palavra não encontrada!')
        return
      }

      const result = evaluateGuess(currentGuess, answer)

      const newEvals = [...evaluations]
      newEvals[currentRow] = result
      setEvaluations(newEvals)

      const newGuesses = [...guesses]
      newGuesses[currentRow] = currentGuess
      setGuesses(newGuesses)

      const priority = { correct: 3, present: 2, absent: 1 }
      const newStatuses = { ...letterStatuses }
      result.forEach((status, i) => {
        const letter = currentGuess[i].toUpperCase()
        if ((priority[status] || 0) > (priority[newStatuses[letter]] || 0)) {
          newStatuses[letter] = status
        }
      })
      setLetterStatuses(newStatuses)

      if (currentGuess === answer) {
        setTimeout(() => alert(`Parabéns! Você acertou em ${currentRow + 1} tentativas!`), 300)
        setGameOver(true)
      } else if (currentRow === 5) {
        setTimeout(() => alert(`A palavra era: ${answer.toUpperCase()}`), 300)
        setGameOver(true)
      }

      setCurrentGuess('')
      setCurrentRow(r => r + 1)
      return
    }

    if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(g => g + key.toLowerCase())
    }
  }, [gameOver, currentGuess, answer, evaluations, guesses, currentRow, letterStatuses])

  useEffect(() => {
    const onKeyDown = (e) => handleKey(e.key.toUpperCase())
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [handleKey])

  function resetGame() {
    setAnswer(getRandomWord())
    setGuesses(Array(6).fill(''))
    setEvaluations(Array(6).fill(null))
    setCurrentGuess('')
    setCurrentRow(0)
    setGameOver(false)
    setLetterStatuses({})
  }

  return (
    <div className="app">
      <header>
        <h1>TERMO</h1>
        <button onClick={resetGame} className="reset-btn">Nova Palavra</button>
      </header>
      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        evaluations={evaluations}
        currentRow={currentRow}
      />
      <Keyboard
        onKey={handleKey}
        letterStatuses={letterStatuses}
      />
    </div>
  )
}

export default App