import Player from './Player'

function ModalWinner({ winner, MOVEMENTS, reset }) {
   if (winner === null) return null

   const textWinner = winner === false ? 'Draw' : 'Winner:'
   return (
      <section className='absolute bg-black/50 top-0 right-0 bottom-0 left-0 flex justify-center items-center'>
         <div className='bg-cyan-700 text-center p-10 flex flex-col gap-5 justify-center items-center w-60 h-60 rounded-xl ring-2 ring-white'>
            <h2 className='font-bold text-xl'>{textWinner}</h2>
            {winner !== false && (
               <Player isSelected>
                  {winner === MOVEMENTS.X ? 'Player 1' : 'Player 2'}
               </Player>
            )}
            <button
               className='bg-slate-900 hover:bg-slate-800 py-2 px-3 rounded-xl ring-2 ring-white'
               onClick={reset}
            >
               New Game
            </button>
         </div>
      </section>
   )
}

export default ModalWinner
