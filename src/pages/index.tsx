import { Container, Photos, Image } from '@/styles/pages';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  const imgs = [
    `Photos/index/1.jpg`,
    `Photos/index/2.jpg`,
    `Photos/index/3.jpg`,
    `Photos/index/4.jpg`,
    `Photos/index/5.jpg`,
    `Photos/index/6.jpg`,
    `Photos/index/7.jpg`,
    `Photos/index/8.jpg`,
    `Photos/index/9.jpg`,
    `Photos/index/10.jpg`,
    `Photos/index/11.jpg`,
    `Photos/index/12.jpg`,
    `Photos/index/13.jpg`,
    `Photos/index/14.jpg`,
    `Photos/index/15.jpg`,
    `Photos/index/16.jpg`,
    `Photos/index/17.jpg`,
    `Photos/index/18.jpg`,
  ];

  return (
    <>
      <Head>
        <title>Xenia Yasmin | Home</title>
      </Head>
      <Container>
        <Photos>
          {imgs.map(img => (
            <Image key={img} src={img} />
          ))}
        </Photos>
      </Container>
    </>
  );
};

export default Home;
