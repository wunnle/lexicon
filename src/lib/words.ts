import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import dayjs from 'dayjs'


export const gameStartDate = dayjs('2022-01-30')

const daysPassed = dayjs().diff(gameStartDate, 'day')

export const gameDayCount = daysPassed + 1

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
  return {
    solution: WORDS[daysPassed],
    solutionIndex: daysPassed
  }
}

export const { solution, solutionIndex } = getWordOfDay()
