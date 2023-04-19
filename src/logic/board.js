import { COMBO_WIN } from '../constants'

export const checkWinner = toCheck => {
   for (const combo of COMBO_WIN) {
      const [a, b, c] = combo
      if (
         toCheck[a] &&
         toCheck[a] === toCheck[b] &&
         toCheck[a] === toCheck[c]
      ) {
         return toCheck[a]
      }
   }
   return null
}

export const checkEndGame = (toCheck) => {
   return toCheck.every((square) => square !== null)
}