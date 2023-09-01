import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import events from "./../data.json"
import Featured from './Featured'


const FeaturedCarousel = () => {

  const selectedEvents = events.slice(0, 4)

  return (
    <Carousel navButtonsAlwaysVisible>
        {selectedEvents.map((event) => (
          <Featured event={event} key={event.id} isCarousel/>
        ))}  
    </Carousel>
  )
}

export default FeaturedCarousel