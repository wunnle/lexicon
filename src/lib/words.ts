import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import dayjs from 'dayjs'


const gameStartDate = dayjs('2022-01-30')

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  const daysPassed = dayjs().diff(gameStartDate, 'day')

  return {
    solution: WORDS[daysPassed],
    solutionIndex: daysPassed
  }
}

export const { solution, solutionIndex } = getWordOfDay()
