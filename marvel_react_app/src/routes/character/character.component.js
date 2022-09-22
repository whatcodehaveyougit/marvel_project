import './character.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/utils'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
     Accordion, 
     AccordionSummary,
     AccordionDetails,
    } from '@mui/material/';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Character = ( {charactersData } ) => {

    const [ characterComics, setCharacterComics ] = useState()
    const [ characterData, setCharacterData ] = useState()

    const { characterid } = useParams();

    const apiRouteComicsData = `/characters/${characterid}/comics`
    const apiRouteCharacterData = `/characters/${characterid}`

    useEffect(  () => {
        const fetchPageData = async () => {
            const result = await fetchData( apiRouteComicsData );
            setCharacterComics( result['data']['results'] );
            // console.log( result['data']['results'][0] );
        }
        fetchPageData()
            .catch(console.error)
    }, [] )

    useEffect(  () => {
        // console.log( " hello from useEffect" + charactersData );
        if ( charactersData = [] && characterid ) {
            const fetchPageData = async () => {
                // console.log( apiRouteCharacterData )
                const result = await fetchData( apiRouteCharacterData );
                // console.log( result['data']['results'][0]['thumbnail']['path']  )
                setCharacterData( result['data']['results'][0] );
            }
            fetchPageData()
                .catch(console.error)
        } else {
            const character = charactersData.find(character => character.id = characterid)
            setCharacterData( character );
        }
        
    }, [ charactersData, characterid] )

    return (
        <>
                
                
         <Card className="character-page">
             <Typography gutterBottom variant="h5">{characterData ? characterData.name : null}</Typography>
             <Typography  variant="heading3">List of comics</Typography> :
            <Box className="thumbnail-image">
                <CardMedia
                    component="img"
                    src={characterData && `${characterData['thumbnail']['path']}.${characterData['thumbnail']['extension']}`}
                    alt={characterData && characterData.name}
                />
                <CardContent className="character-information">                    
                    <Grid>
                        {
                            characterComics && characterComics.map(( comic ) => (
                                    <Accordion 
                                        className="accordion-character-container"
                                        key={comic.id}
                                        >
                                        <AccordionSummary
                                            // expandIcon={ />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            >
                                            <Typography>{ comic.title }</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {  comic.description }
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
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