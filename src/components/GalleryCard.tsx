import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
// import {useSelector, useDispatch} from 'react-redux'
// import { toggleShareModal } from '../features/shareModalSlice';
import ModalShare from './ModalShare';


// interface RootState {
//     shareModal: {
//       open: boolean;
//     };
//   }

interface GalleryCardProps{
    event: {
        id: number;
        name: string;
        date: string;
        location: string;
        image: string;
        desc: string;
        drive: string;
    }
}

const GalleryCard: React.FC<GalleryCardProps> = ({event}) => {
    const [currentEvent, setCurrentEvent] = React.useState<any>([])
    const [currentEventID, setCurrentEventID] = React.useState<number>()
    const [isShare, setIsShare] = React.useState<boolean>(false)
    // const dispatch = useDispatch()

    const anchorStyles = {
        textDecoration: 'none', // Remove underlining
        color: 'inherit', // Inherit font color from parent
    };

    const summonModal = (id: number) => {
        // dispatch(toggleShareModal(true))
        setIsShare(true)
        setCurrentEvent(event)
        setCurrentEventID(id)
        console.log(`ini idnya: ${id}`)
    }

    const imgUrl = `/img/${event.id}/thumbnail.jpg`;

    // const { open } = useSelector((state: RootState) => state.shareModal)
    // console.log(`event id ${event.id}: ${open}`)
  return (
    <Grid item xs={12} xl={4} lg={4} md={4} sm={6}>
        <Card sx={{ maxWidth: 345 }}>
            <a href={`/${event.id}`} style={anchorStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={imgUrl}
                        alt={event.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {event.desc.slice(0, 80) + "...  " }<b>Read More</b>
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </a>
            <CardActions>
                <a href={event.drive} target="_blank" rel="noopener noreferrer">
                    <Button size="small" color="primary">Drive Link</Button>
                </a>
                <Button size="small" color="primary" onClick={() => summonModal(event.id)}>Share</Button>
            </CardActions>
            <ModalShare key={event.id} event={currentEvent} open={isShare && event.id === currentEventID} handleClose={() => setIsShare(false)}/>
        </Card>
    </Grid>
  )
}

export default GalleryCard