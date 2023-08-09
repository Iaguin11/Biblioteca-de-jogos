
import Game from "./components/Game"
import NemGame from "./components/NewGameFrom"
import useGameCollection from "./hooks/UseGameCollection"

function App() {
  const {games, addGame, removerGame} = useGameCollection()

  return(
    <div className="app">
    <h1>Bilioteca de Jogos</h1>
    <NemGame addGame={addGame}/>
    <div className="games">
      {games.length > 0 
      ? games.map((game)=>(
        <Game
          key={game.id}
          title={game.title}
          cover={game.cover}
          onRemove={() => removerGame(game.id)}
        />))
        : (
          <h2 style={{margin: "4rem"}}>Parece que ainda não tem nada aqui.</h2>
        )}
    </div>
  </div>
  )
}

export default App