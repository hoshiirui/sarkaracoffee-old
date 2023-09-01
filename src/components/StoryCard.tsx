import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

interface StoryCardProps {
  story: {
    latestChapter: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
  };
}

export default function StoryCard(props: StoryCardProps) {
  const { story } = props;

  return (
    <Grid item xs={12} xl={4} lg={4} md={4} sm={6}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={story.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {story.title}
            </Typography>
            <Typography variant="subtitle2" paragraph color="text.secondary">
              {story.latestChapter}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {story.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
