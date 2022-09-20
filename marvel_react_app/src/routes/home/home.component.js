import { fetchData } from '../../utils/utils'
import { useState, useEffect } from 'react'
import { Grid, Button } from '@mui/material';
import './home.styles.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


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
                        <Card className="character-card">
                            <CardMedia
                                className="thumbnail-image"
                                component="img"
                                src={`${character['thumbnail']['path']}.jpg`}
                                alt={character.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {character.name}
                                </Typography>
                                <Typography variant="body2" className="max-lines" color="text.secondary">
                                { character.description ? character.description : 
                                <div>
                                    <p>This superhero has no description :,-(</p> 
                                    <p>However, I am sure they have lots of special powers!</p> 
                                </div>                           
                                }
                                </Typography>
                            </CardContent>
                            <CardActions className="card-actions">
                                <Button variant="contained">Find out more</Button> 
                            </CardActions>
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Home;