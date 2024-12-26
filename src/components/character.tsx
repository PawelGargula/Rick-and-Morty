import type { Character } from "../api/api-client-generated";

export default function Character({ character }: { character: Character }) {
    return (
        <li key={character.id} className="bg-gray-200 rounded-lg p-4">
            <img src={character.image} alt={character.name} className="w-full h-48 object-cover rounded-lg" />
            <h2 className="text-xl font-bold mt-4">{character.name}</h2>
            <div className="mt-2 space-y-1">
                <p className="text-gray-600">Species: {character.species}</p>
                <p className="text-gray-600">Status: {character.status}</p>
                <p className="text-gray-600">Gender: {character.gender}</p>
            </div>
        </li>
    );
}
