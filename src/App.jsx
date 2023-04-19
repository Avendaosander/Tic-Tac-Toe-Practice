import { useState } from 'react'
import { MOVEMENTS } from './constants'
import { checkWinner, checkEndGame} from './logic/board'
import confetti from 'canvas-confetti'
import Square from './components/Square'
import Player from './components/Player'
import ModalWinner from './components/ModalWinner'
import { resetGameToLS, saveGameToLS } from './logic/storage/storage'

function App() {
   const [board, setBoard] = useState(() => {
      const boardLS = window.localStorage.getItem('board')
      return boardLS ? JSON.parse(boardLS) : Array(9).fill(null)
   })
   const [player, setPlayer] = useState(() => {
      const playerLS = window.localStorage.getItem('player')
      return playerLS ? JSON.parse(playerLS) : MOVEMENTS.X
   })
   const [winner, setWinner] = useState(null)

   const reset = () => {
      setBoard(Array(9).fill(null))
      setPlayer(MOVEMENTS.X)
      setWinner(null)
      resetGameToLS()
   }

   const updateBoard = index => {
      if (board[index]) return
      const newBoard = [...board]
      newBoard[index] = player
      setBoard(newBoard)
      const newTurn = player === MOVEMENTS.X ? MOVEMENTS.O : MOVEMENTS.X
      setPlayer(newTurn)
      saveGameToLS({
         board: newBoard,
         player: newTurn
      })
      const newWinner = checkWinner(newBoard)
      if (newWinner) {
         confetti()
         setWinner(newWinner)
      } else if(checkEndGame(newBoard)) {
         setWinner(false)
      }
   }

   return (
      <main className='flex flex-col justify-center items-center'>
         <h1 className='text-4xl'>Tic Tac Toe</h1>
         <button
            className='bg-slate-900 hover:bg-slate-800 mt-5 py-2 px-3 rounded-xl ring-2 ring-white'
            onClick={reset}
         >
            Reset Game
         </button>
         <section className='flex justify-around items-center gap-20'>
            <Player isSelected={player === MOVEMENTS.X} icon={MOVEMENTS.X}>Player 1</Player>
            <article className='grid grid-cols-3 gap-3 my-6'>
               {board.map((square, i) => {
                  return (
                     <Square
                        key={i}
                        index={i}
                        updateBoard={updateBoard}
                     >
                        {square}
                     </Square>
                  )
               })}
            </article>
            <Player isSelected={player === MOVEMENTS.O} icon={MOVEMENTS.O}>Player 2</Player>
         </section>
         <ModalWinner winner={winner} MOVEMENTS={MOVEMENTS} reset={reset}/>
      </main>
   )
}

export default App
