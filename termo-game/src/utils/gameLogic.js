export function evaluateGuess(guess, answer) {
  const result = Array(5).fill('absent')
  const answerLetters = [...answer]
  const guessLetters = [...guess]

  // 1ª passagem: letras corretas
  guessLetters.forEach((letter, i) => {
    if (letter === answerLetters[i]) {
      result[i] = 'correct'
      answerLetters[i] = null
      guessLetters[i] = null
    }
  })

  // 2ª passagem: letras presentes
  guessLetters.forEach((letter, i) => {
    if (!letter) return
    const j = answerLetters.indexOf(letter)
    if (j !== -1) {
      result[i] = 'present'
      answerLetters[j] = null
    }
  })

  return result
}