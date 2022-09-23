import './character.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/utils'
import {
     Accordion, 
     AccordionSummary,
     AccordionDetails,
     Box,
     Card,
     CardContent,
     Grid,
     Typography
} from '@mui/material/';


const Character = ( {charactersData } ) => {

    const [ characterComics, setCharacterComics ] = useState()
    const [ characterData, setCharacterData ] = useState()
    const [ backgroundImageUrl, setBackgroundImageUrl ] = useState()

    const { characterid } = useParams();

    const apiRouteComicsData = `/characters/${characterid}/comics`
    const apiRouteCharacterData = `/characters/${characterid}`

    useEffect(  () => {
        const fetchPageData = async () => {
            const result = await fetchData( apiRouteComicsData );
            setCharacterComics( result['data']['results'] );
        }
        fetchPageData()
            .catch(console.error)
    }, [] )

    useEffect(  () => {
        if ( charactersData == [] && characterid ) {
            const fetchPageData = async () => {
                const result = await fetchData( apiRouteCharacterData );
                const result2 = result['data']['results'][0];
                setCharacterData( result2 );
                const backgrounUrlLink =  result2['thumbnail']['path'] + '.' + result2['thumbnail']['extension']
                setBackgroundImageUrl( backgrounUrlLink )
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
            <div className="thumbnail-image"  
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                >
                <CardContent className="character-information">  
                    <Grid className="character-page-headings">
                        <Typography align="center" variant="h3">{characterData ? characterData.name : null}</Typography>
                        <Typography align="center" variant="h5">List of comics for this character:</Typography>                 
                    </Grid>            
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
                                        <Box sx={{ fontWeight: 'bold' }}>{ comic.title }</Box>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {  comic.description ? 
                                                comic.description : 
                                                'No description for this comic ;('
                                            }
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        }
                    </Grid>
                </CardContent>
            </div>
        </Card>
        
        </>
    )
}

export default Character;