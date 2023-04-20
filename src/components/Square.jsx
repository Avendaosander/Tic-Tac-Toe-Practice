function Square({ children, updateBoard, index }) {
   const handleMovement = () => {
      updateBoard(index)
   }
   return (
      <div
         onClick={handleMovement}
         className='rounded-lg ring-2 ring-slate-200 p-8 text-xl sm:text-2xl cursor-pointer h-12 w-12 sm:h-24 sm:w-24 flex justify-center items-center'
      >
         {children}
      </div>
   )
}

export default Square
