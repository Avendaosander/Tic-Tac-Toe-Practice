function Square({ children, updateBoard, index }) {
   const handleMovement = () => {
      updateBoard(index)
   }
   return (
      <div
         onClick={handleMovement}
         className='rounded-lg ring-2 ring-slate-200 p-8 text-2xl cursor-pointer h-24 w-24 flex justify-center'
      >
         {children}
      </div>
   )
}

export default Square
