import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';

const GalleryCard = () => {
  return (
    <Grid item xs={12} xl={4} lg={4} md={4} sm={6}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1613257125720-c2f8a783416a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Misaki no Matsuri
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    As the seasonal flower blooms beautifully, born a girl that has an 
                    indescribable beauty...
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Drive Link
                </Button>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default GalleryCard