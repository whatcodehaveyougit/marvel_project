import { fetchData } from '../../utils/utils'
import { useState } from 'react'
import { Grid, Button } from '@mui/material';
import './home.styles.scss'

const Home = () => {

    const [ charactersData, setCharacters ] = useState([])

    const handleClick = async () => {
      const result = await fetchData()
      setCharacters( result['data']['results'] );
    }  

    return (
        <div className="home-container">
            <button onClick={handleClick}>Click Me</button>
            <Grid container spacing={2}>
                {
                    charactersData && charactersData.map(( character ) => (
                    <Grid item xs={4} className="character-card" key={character.id}>
                        { character['thumbnail']['path'] && 
                            <img className="thumbnail-image" src={`${character['thumbnail']['path']}.jpg` } />
                        }
                        <h3>{character.name}</h3>
                        <p className="max-lines">
                            {character.description}
                        </p>
                        <Button variant="contained">Find out more</Button>
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home;