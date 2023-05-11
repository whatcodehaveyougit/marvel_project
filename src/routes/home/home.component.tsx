import {
    Grid,
    TextField
} from '@mui/material';
import './home.styles.scss'
import CharacterCard from '../../components/character-card/character-card.componet'
import { useEffect, useState, ChangeEvent, useContext } from 'react'
import { Character } from '../../types/types'
import { CharactersContext } from '../../contexts/characters.context';

export type CharactersDataProps = {
    charactersData: Character[];
}

const Home = () => {

    const { charactersData } = useContext(CharactersContext)

    const [charactersDataState, setCharctersDataState] = useState<Character[]>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const filteredCharacters = charactersData.filter(character => character.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setCharctersDataState(filteredCharacters)
    }

    useEffect(() => {
        if (charactersData) {
            setCharctersDataState(charactersData)
        }
    }, [charactersData])

    return (
        <div className="home-container">
            <div className="search-bar-component">
                <input
                    placeholder="Search Marvel Characters..."
                    name="search-monsters"
                    className="search-monsters-input"
                    onChange={handleChange}
                />
            </div>
            <Grid container spacing={2}>
                {
                    charactersDataState && charactersDataState.map((character) => (
                        <Grid item xs={12} sm={6} md={4} className="character-card-container" key={character.id}>
                            <CharacterCard character={character} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home;