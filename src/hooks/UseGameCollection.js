import { useState } from "react"


export default function useGameCollection(){

    const [games, setGames] = useState(()=>{
      const storedGames = localStorage.getItem("obc-game-lib")
      if(!storedGames) return []
      return JSON.parse(storedGames)
    })
    
  
    const addGame = ({title, cover}) => {
     const id = Math.floor(Math.random() * 1000)
     const game = {id, title, cover}
     setGames(states => {
      const newState = [...states, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
      })
    }
    const removerGame = (id) => {
      setGames(state => {
       const newState = state.filter(game => game.id !== id)
       localStorage.setItem("obc-game-lib", JSON.stringify(newState))
       return newState
      })
    }
  
  
    return {games, addGame, removerGame}
}