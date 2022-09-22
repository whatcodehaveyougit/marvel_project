import { 
    Grid,
    TextField
 } from '@mui/material';
import './home.styles.scss'
import CharacterCard from '../../components/character-card/character-card.componet'
import SearchBar from '../../components/search-bar/search-bar-component'
import { useEffect, useState } from 'react'

const Home = ( { charactersData } ) => {

    const [ charactersDataState, setCharctersDataState ] = useState();

    const handleChange = (e) => {
        const filteredCharacters = charactersData.filter(character => character.name.includes(e.target.value));
        setCharctersDataState( filteredCharacters )
    }

    useEffect(() => {
        if ( charactersData ) {
            setCharctersDataState( charactersData )
        }
    }, [charactersData] )

    return (
        <div className="home-container">
            <div className="search-bar-component">
                <TextField 
                placeholder="Search Marvel Characters!" 
                name="firstName" 
                onChange={handleChange}
            />
            </div>
            <Grid container spacing={2}>
                {
                    charactersDataState && charactersDataState.map(( character ) => (
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