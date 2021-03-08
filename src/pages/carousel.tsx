import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export default class extends React.Component {
  render() {
    return (
        <CarouselProvider
          naturalSlideWidth={270}
          naturalSlideHeight={100}
          totalSlides={3}
        >
          <Slider >
            <Slide index={0}><img style={{ "maxWidth": '98%', "maxHeight": '98%' }} src="Photos/index/1.jpg" alt="" /></Slide>
            <Slide index={1}><img style={{ "maxWidth": '98%', "maxHeight": '98%' }} src="Photos/index/2.jpg" alt="" /></Slide>
            <Slide index={2}><img style={{ "maxWidth": '98%', "maxHeight": '98%' }} src="Photos/index/11.jpg" alt="" /></Slide>
          </Slider>
          <ButtonBack >Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
    );
  }
}