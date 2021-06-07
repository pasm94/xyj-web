import { Container, Photos, Image } from '@/styles/pages';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  const imgs = [
    `Photos/index/0.jpg`,
    `Photos/index/1.PNG`,
    `Photos/index/2.JPG`,
    `Photos/index/3.jpg`,
    `Photos/index/4.jpg`,
    `Photos/index/5.JPG`,
    `Photos/index/6.JPG`,
    `Photos/index/7.jpg`,
    `Photos/index/8.JPG`,
    `Photos/index/9.JPG`,
    `Photos/index/10.JPG`,
    `Photos/index/11.jpg`,
    `Photos/index/12.jpg`,
    `Photos/index/13.JPG`,
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
