import { useRouter } from 'next/router';
import {
  Container,
  Image,
  Photos,
  Title,
  SwiperContainer,
} from '@/styles/pages/albums/slug';
import { SwiperCarousel } from '@/components/SwiperCarousel';
import { useState } from 'react';
import { FiXCircle } from 'react-icons/fi';
import Head from 'next/head';

export default function Album() {
  const router = useRouter();
  const [isSwiperCarouselOpen, setIsSwiperCarouselOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  let album = '';
  let imgs = [];
  if (router.asPath.includes('hades')) {
    album = 'Hades';
    imgs = [];
  } else if (router.asPath.includes('nature')) {
    album = 'Nature';
    imgs = [
      `/Albums/${album}/0.jpg`,
      `/Albums/${album}/1.jpg`,
      `/Albums/${album}/2.jpg`,
      `/Albums/${album}/3.jpg`,
      `/Albums/${album}/4.jpg`,
      `/Albums/${album}/5.jpg`,
      `/Albums/${album}/6.jpg`,
      `/Albums/${album}/7.jpg`,
      `/Albums/${album}/8.jpg`,
      `/Albums/${album}/9.jpg`,
      `/Albums/${album}/10.jpg`,
      `/Albums/${album}/11.jpg`,
      `/Albums/${album}/12.jpg`,
      `/Albums/${album}/13.jpg`,
      `/Albums/${album}/14.jpg`,
      `/Albums/${album}/15.jpg`,
      `/Albums/${album}/16.jpg`,
      `/Albums/${album}/17.jpg`,
      `/Albums/${album}/18.jpg`,
      `/Albums/${album}/19.jpg`,
      `/Albums/${album}/20.jpg`,
      `/Albums/${album}/21.jpg`,
      `/Albums/${album}/22.jpg`,
      `/Albums/${album}/23.jpg`,
      `/Albums/${album}/24.jpg`,
      `/Albums/${album}/25.jpg`,
      `/Albums/${album}/26.jpg`,
      `/Albums/${album}/27.jpg`,
      `/Albums/${album}/28.jpg`,
      `/Albums/${album}/29.jpg`,
      `/Albums/${album}/30.jpg`,
      `/Albums/${album}/31.jpg`,
      `/Albums/${album}/32.jpg`,
      `/Albums/${album}/33.jpg`,
      `/Albums/${album}/34.jpg`,
      `/Albums/${album}/35.jpg`,
      `/Albums/${album}/36.jpg`,
      `/Albums/${album}/37.jpg`,
      `/Albums/${album}/38.jpg`,
      `/Albums/${album}/39.jpg`,
    ];
  } else if (router.asPath.includes('places')) {
    album = 'Places';
    imgs = [
      `/Albums/${album}/0.jpg`,
      `/Albums/${album}/1.jpg`,
      `/Albums/${album}/2.jpg`,
      `/Albums/${album}/3.png`,
      `/Albums/${album}/4.jpg`,
      `/Albums/${album}/5.jpg`,
    ];
  } else if (router.asPath.includes('art')) {
    album = 'Art';
    imgs = [
      `/Albums/${album}/0.jpg`,
      `/Albums/${album}/1.jpg`,
      `/Albums/${album}/2.jpg`,
      `/Albums/${album}/3.jpg`,
      `/Albums/${album}/4.jpg`,
    ];
  }

  const regexFindNumber = /\d+/g;

  function openCarousel(imgPosition: number) {
    setInitialSlide(imgPosition);
    setIsSwiperCarouselOpen(true);
  }

  return (
    <>
      <Head>
        <title>Xenia Yasmin | {album}</title>
      </Head>
      <Container>
        <Title>
          <span>{album}</span>
        </Title>
        <Photos style={{ filter: isSwiperCarouselOpen && 'blur(5px)' }}>
          {imgs.map(img => (
            <Image
              onClick={() => openCarousel(Number(img.match(regexFindNumber)))}
              key={img}
              src={img}
            />
          ))}
        </Photos>

        <SwiperContainer>
          {isSwiperCarouselOpen && (
            <>
              <section>
                <FiXCircle
                  onClick={() => {
                    setIsSwiperCarouselOpen(false);
                  }}
                />
              </section>
              <SwiperCarousel imagesSrc={imgs} initialSlide={initialSlide} />
            </>
          )}
        </SwiperContainer>
      </Container>
    </>
  );
}
