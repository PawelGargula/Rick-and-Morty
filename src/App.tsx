import Character from "./components/character";
import useCharacters from "./hooks/useCharacters";

function App() {
  const characters = useCharacters();
  return (
    <>
      <main>
        <h1 className="text-4xl font-bold text-center my-8">Rick and Morty characters</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </ul>
      </main>
    </>
  )
}

export default App
