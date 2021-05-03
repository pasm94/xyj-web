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
  const imgs = [
    `Photos/index/0.jpg`,
    `Photos/index/1.jpg`,
    `Photos/index/2.jpg`,
    `Photos/index/3.jpg`,
    `Photos/index/4.jpg`,
    `Photos/index/5.jpg`,
    `Photos/index/6.jpg`,
    `Photos/index/7.jpg`,
    `Photos/index/8.jpg`,
  ];

  return (
    <>
      <Head>
        <title>Xenia Yasmin | Home</title>
      </Head>
      <Container>
        <Photos>
          {imgs.map(img => (
            <Image src={img} />
          ))}
        </Photos>
      </Container>
    </>
  );
};

export default Home;
