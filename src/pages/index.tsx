import Carousel from '@/components/Carousel';
import {
  Container,
  Photos,
  CloseButton,
  CarouselContent,
  Image,
  GoTopButton,
} from '@/styles/pages';
import Head from 'next/head';
import React from 'react';
import { useCallback, useState } from 'react';
import { IoIosArrowDropupCircle, IoIosCloseCircle } from 'react-icons/io';

const Home = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenAwesomeSlider = useCallback(index => {
    setIsCarouselOpen(true);
    setCurrentSlide(index);
  }, []);

  const handleCloseAwesomeSlider = useCallback(() => {
    setIsCarouselOpen(false);
  }, []);

  return (
    <>
      <Head>
        <title>Xenia Yasmin | Home</title>
      </Head>
      <Container>
        <CloseButton
          visible={!isCarouselOpen}
          onClick={handleCloseAwesomeSlider}
        >
          <IoIosCloseCircle />
        </CloseButton>

        <Photos isCaroselOpen={isCarouselOpen}>
          <Image
            onClick={() => handleOpenAwesomeSlider(0)}
            src='Photos/index/2.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(1)}
            src='Photos/index/3.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(2)}
            src='Photos/index/4.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(3)}
            src='Photos/index/5.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(4)}
            src='Photos/index/8.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(5)}
            src='Photos/index/9.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(6)}
            src='Photos/index/6.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(7)}
            src='Photos/index/7.jpg'
            alt=''
          />
          <Image
            onClick={() => handleOpenAwesomeSlider(8)}
            src='Photos/index/1.jpg'
            alt=''
          />
          {/* <Image 
            onClick={() => handleOpenAwesomeSlider(9)}
            src='Photos/index/10.jpg'
            alt=''
          />
          <Image 
            onClick={() => handleOpenAwesomeSlider(10)}
            src='Photos/index/12.jpg'
            alt=''
          />
          <Image 
            onClick={() => handleOpenAwesomeSlider(11)}
            src='Photos/index/11.jpg'
            alt=''
          /> */}
        </Photos>

        <CarouselContent visible={isCarouselOpen}>
          <Carousel currentSlide={currentSlide} />
        </CarouselContent>

        {/* <GoTopButton visible={!isCarouselOpen}>
          <IoIosArrowDropupCircle />
        </GoTopButton> */}
      </Container>
    </>
  );
};

export default Home;
