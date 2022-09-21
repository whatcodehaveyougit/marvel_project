import './character.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/utils'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Character = ( {charactersData } ) => {

    const [ characterComics, setCharacterComics ] = useState([])
    const { characterid } = useParams();

    const character = charactersData.find(character => character.id = characterid)
    const apiRoute = `/characters/${characterid}/comics`

    useEffect(  () => {
        const fetchPageData = async () => {
            const result = await fetchData( apiRoute );
            setCharacterComics( result['data']['results'] );
        }
        fetchPageData()
            .catch(console.error)
        
    }, [] )


    return (
        <>
         <Card className="character-page">
            <Box className="thumbnail-image">
                <CardMedia
                    component="img"
                    src={`${character['thumbnail']['path']}.jpg`}
                    alt={character.name}
                />
                <CardContent className="character-information">
                <Typography gutterBottom variant="h5">{character.name}</Typography>
                <Grid>
                    <Typography  variant="heading3">
                    List of comics
                    </Typography> : 
                    {
                        characterComics && characterComics.map(( comic ) => (
                            <div>
                                <Box sx={{ fontWeight: 'bold' }}>{ comic.title }</Box>
                                <Box sx={{ fontWeight: 'light' }}>{ comic.description }</Box>
                            </div>
                        ))
                    }
                </Grid>
            </CardContent>
            </Box>
            
            
        </Card>
        
        </>
    )
}

export default Character;