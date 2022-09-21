import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import './character-card.styles.scss'


const CharacterCard = ( { character } ) => {

    return (
        <Card className="character-card">
            <CardMedia
                className="thumbnail-image"
                component="img"
                src={`${character['thumbnail']['path']}.jpg`}
                alt={character.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{character.name}</Typography>
                <Grid className="max-lines">
                    { character.description ?  
                    <Typography  variant="body2" color="text.secondary">{character.description}</Typography> : 
                    <Grid>
                        <Typography  variant="body2" color="text.secondary">This superhero has no description :,-(</Typography> 
                        <Typography  variant="body2" color="text.secondary">However, I am sure they have lots of special powers!</Typography> 
                    </Grid>                           
                }
                </Grid>
            </CardContent>
            <CardActions className="card-actions">
                <Button variant="contained">Find out more</Button> 
            </CardActions>
        </Card>
    )
}

export default CharacterCard;