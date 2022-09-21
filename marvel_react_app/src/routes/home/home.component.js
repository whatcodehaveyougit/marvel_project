import { fetchData } from '../../utils/utils'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import './home.styles.scss'
import CharacterCard from '../../components/character-card/character-card.componet'

const Home = () => {

    const [ charactersData, setCharacters ] = useState([])

    useEffect(  () => {
        const fetchPageData = async () => {
            const result = await fetchData()
            setCharacters( result['data']['results'] );
        }
        fetchPageData()
            .catch(console.error)
    }, [])

    return (
        <div className="home-container">
            <Grid container spacing={2}>
                {
                    charactersData && charactersData.map(( character ) => (
                    <Grid item xs={4} className="character-card-container" key={character.id}>
                        <CharacterCard character={character} />
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home;