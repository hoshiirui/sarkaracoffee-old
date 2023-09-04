import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';

export default function MasonryImageList() {
  return (
    <Grid item xs={12} md={4}>
        <Box sx={{ width: 420, height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
        </Box>
    </Grid>
  );
}

const itemData = [
  {
    img: `/img/6/imglist/1.JPG`,
    title: 'Bed',
  },
  {
    img: `/img/6/imglist/2.JPG`,
    title: 'Books',
  },
  {
    img: `/img/6/imglist/3.JPG`,
    title: 'Sink',
  },
  {
    img: `/img/6/imglist/4.JPG`,
    title: 'Kitchen',
  },
  {
    img: `/img/6/imglist/5.JPG`,
    title: 'Blinds',
  },
  {
    img: `/img/6/imglist/6.JPG`,
    title: 'Chairs',
  },
  {
    img: `/img/6/imglist/7.JPG`,
    title: 'Laptop',
  },
  {
    img: `/img/6/imglist/8.JPG`,
    title: 'Doors',
  },
  {
    img: `/img/6/imglist/9.JPG`,
    title: 'Coffee',
  },
  {
    img: `/img/6/imglist/10.JPG`,
    title: 'Storage',
  },
  {
    img: `/img/6/imglist/11.JPG`,
    title: 'Candle',
  },
  {
    img: `/img/6/imglist/12.JPG`,
    title: 'Coffee table',
  },
];
