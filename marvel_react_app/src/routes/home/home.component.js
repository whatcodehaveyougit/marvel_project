import { Grid } from '@mui/material';
import './home.styles.scss'
import CharacterCard from '../../components/character-card/character-card.componet'

const Home = ( { charactersData } ) => {


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