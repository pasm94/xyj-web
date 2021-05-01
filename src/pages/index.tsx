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

const Home = () => {
  return (
    <>
      <Head>
        <title>Xenia Yasmin | Home</title>
      </Head>
      <Container>
        <Photos>
          <Image src='Photos/index/2.jpg' alt='' />
          <Image src='Photos/index/3.jpg' alt='' />
          <Image src='Photos/index/4.jpg' alt='' />
          <Image src='Photos/index/5.jpg' alt='' />
          <Image src='Photos/index/8.jpg' alt='' />
          <Image src='Photos/index/9.jpg' alt='' />
          <Image src='Photos/index/6.jpg' alt='' />
          <Image src='Photos/index/7.jpg' alt='' />
          <Image src='Photos/index/1.jpg' alt='' />
          {/* <Image 
            
            src='Photos/index/10.jpg'
            alt=''
          />
          <Image 
            
            src='Photos/index/12.jpg'
            alt=''
          />
          <Image 
            
            src='Photos/index/11.jpg'
            alt=''
          /> */}
        </Photos>
      </Container>
    </>
  );
};

export default Home;
