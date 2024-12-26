import { DefaultApi, Character } from "../api/api-client-generated";
import { useEffect, useState } from "react";

export default function useCharacters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    
    useEffect(() => {
        const api = new DefaultApi();
        api.getCharacters().then((response) => {
            setCharacters(response.data.results || []);
        });
    }, []);

    return characters;
}
