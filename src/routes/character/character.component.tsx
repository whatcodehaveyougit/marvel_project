import './character.styles.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react'
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
import { Character, Comic, CharacterAPICall } from '../../types/types'
import { CharactersContext } from '../../contexts/characters.context';

const CharacterPage = () => {

    const { charactersData } = useContext(CharactersContext)

    const [characterComics, setCharacterComics] = useState<Comic[]>()
    const [characterData, setCharacterData] = useState<Character>()
    const [backgroundImageUrl, setBackgroundImageUrl] = useState<string>();

    const { characterid } = useParams();

    const setBackgroundImageUrlFunction = (characterData: Character): void => {
        const backgroundImageUrlConcatenated = characterData['thumbnail']['path'] + '.' + characterData['thumbnail']['extension']
        setBackgroundImageUrl(backgroundImageUrlConcatenated)
    }

    const fetchComicsData = async () => {
        const result = await fetchData<Comic[]>(`/characters/${characterid}/comics`);
        setCharacterComics(result['data']['results']);
    }

    const fetchCharacterData = async () => {
        const dataFetched = await fetchData<CharacterAPICall>(`/characters/${characterid}`);
        const dataFetchedDrilledInto = dataFetched['data']['results'][0];
        if (dataFetchedDrilledInto) {
            setCharacterData(dataFetchedDrilledInto);
            setBackgroundImageUrlFunction(dataFetchedDrilledInto);
        }
    }

    useEffect(() => {
        // If we are given the character data, use that (it will save us having to do another fetch)
        if (charactersData.length > 0) {
            const character = charactersData.find(character => character.id.toString() === characterid)
            if (character !== undefined) {
                setCharacterData(character);
                setBackgroundImageUrlFunction(character)
            }
        } else {
            fetchCharacterData()
                .catch(console.error)
        }
        fetchComicsData()
            .catch(console.error)
    }, [])


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
                                characterComics && characterComics.map((comic) => (
                                    <Accordion
                                        className="accordion-character-container"
                                        key={comic.id}
                                    >
                                        <AccordionSummary
                                            // expandIcon={ />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Box sx={{ fontWeight: 'bold' }}>{comic.title}</Box>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {comic.description ?
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

export default CharacterPage;