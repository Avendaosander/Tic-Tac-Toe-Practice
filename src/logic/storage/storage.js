export const saveGameToLS = ({board, player}) => {
   window.localStorage.setItem('board', JSON.stringify(board))
   window.localStorage.setItem('player', JSON.stringify(player))
}

export const resetGameToLS = () => {
   window.localStorage.removeItem('board')
   window.localStorage.removeItem('player')
}