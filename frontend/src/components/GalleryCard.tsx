import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'
import { toggleShareModal } from '../features/shareModalSlice';
import ModalShare from './ModalShare';


interface RootState {
    shareModal: {
      open: boolean;
    };
  }

interface GalleryCardProps{
    event: {
        id: number;
        name: string;
        date: string;
        location: string;
        image: string;
        desc: string;
    }
}

const GalleryCard: React.FC<GalleryCardProps> = ({event}) => {
    const dispatch = useDispatch()

    const anchorStyles = {
        textDecoration: 'none', // Remove underlining
        color: 'inherit', // Inherit font color from parent
    };

    const summonModal = () => {
        dispatch(toggleShareModal(true))
    }

    const { open } = useSelector((state: RootState) => state.shareModal)
    console.log(open)
  return (
    <Grid item xs={12} xl={4} lg={4} md={4} sm={6}>
        <Card sx={{ maxWidth: 345 }}>
            <a href={`/${event.id}`} style={anchorStyles}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={event.image}
                        alt={event.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {event.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {event.desc}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </a>
            <CardActions>
                <Button size="small" color="primary">Drive Link</Button>
                <Button size="small" color="primary" onClick={summonModal}>Share</Button>
            </CardActions>
            <ModalShare key={event.id} event={event} open={open}/>
        </Card>
    </Grid>
  )
}

export default GalleryCard