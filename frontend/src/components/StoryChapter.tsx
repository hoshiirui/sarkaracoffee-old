import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface StoryChapterProps {
  chapter: {
    chapterName: string;
    chapterType: string;
    chapterContent: string[];
  };
}

export default function StoryChapter(props: StoryChapterProps) {
  const { chapter } = props;

  return (
    <Grid item xs={3} md={3}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent>
            <Typography component="h6" variant="subtitle2">
              {chapter.chapterName}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {chapter.chapterType}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
