import React from 'react'

function Player({ children, isSelected, icon }) {
   const selected = isSelected
      ? 'p-2 bg-cyan-400 rounded-lg text-slate-900 text-xl font-medium'
      : 'p-2 rounded-lg text-xl font-medium'
   return (
      <article className='flex flex-col items-center gap-3'>
         <h2 className={selected}>{children}</h2>
         <p className='text-3xl'>{icon}</p>
      </article>
   )
}

export default Player
