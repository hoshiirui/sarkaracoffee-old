import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Grid } from "@mui/material";

interface MasonryImageListProps {
  id: number | undefined;
}

export default function MasonryImageList(props: MasonryImageListProps) {
  const itemData = [];
  const basePath = `/img/${props.id}/imglist/`;
  const numberOfImages = 12;
  for (let i = 1; i <= numberOfImages; i++) {
    const imgLink = `${basePath}${i}.JPG`;
    itemData.push(imgLink);
  }
  return (
    <Grid item xs={12} md={4}>
      <Box sx={{ width: 420, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map(
            (
              imgLink // Updated this line
            ) => (
              <ImageListItem key={imgLink}>
                <img
                  src={`${imgLink}?w=248&fit=crop&auto=format`}
                  srcSet={`${imgLink}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt=""
                  loading="lazy" // Removed alt attribute since 'item.title' is no longer available
                />
              </ImageListItem>
            )
          )}
        </ImageList>
      </Box>
    </Grid>
  );
}
