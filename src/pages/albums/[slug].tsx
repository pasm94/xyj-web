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
      `/Albums/${album}/40.jpg`,
      `/Albums/${album}/41.jpg`,
      `/Albums/${album}/42.jpg`,
      `/Albums/${album}/43.jpg`,
      `/Albums/${album}/44.jpg`,
      `/Albums/${album}/45.jpg`,
      `/Albums/${album}/46.jpg`,
      `/Albums/${album}/47.jpg`,
      `/Albums/${album}/48.jpg`,
      `/Albums/${album}/49.jpg`,
      `/Albums/${album}/50.jpg`,
      `/Albums/${album}/51.jpg`,
      `/Albums/${album}/52.jpg`,
      `/Albums/${album}/53.jpg`,
      `/Albums/${album}/54.jpg`,
      `/Albums/${album}/55.jpg`,
      `/Albums/${album}/56.jpg`,
      `/Albums/${album}/57.jpg`,
      `/Albums/${album}/58.jpg`,
      `/Albums/${album}/59.jpg`,
      `/Albums/${album}/60.jpg`,
      `/Albums/${album}/61.jpg`,
      `/Albums/${album}/62.jpg`,
      `/Albums/${album}/63.jpg`,
      `/Albums/${album}/64.jpg`,
      `/Albums/${album}/65.jpg`,
      `/Albums/${album}/66.jpg`,
      `/Albums/${album}/67.jpg`,
      `/Albums/${album}/68.jpg`,
      `/Albums/${album}/69.jpg`,
      `/Albums/${album}/70.jpg`,
      `/Albums/${album}/71.jpg`,
      `/Albums/${album}/72.jpg`,
      `/Albums/${album}/73.jpg`,
      `/Albums/${album}/74.jpg`,
      `/Albums/${album}/75.jpg`,
      `/Albums/${album}/76.jpg`,
      `/Albums/${album}/77.jpg`,
      `/Albums/${album}/78.jpg`,
      `/Albums/${album}/79.jpg`,
      `/Albums/${album}/80.jpg`,
      `/Albums/${album}/81.jpg`,
      `/Albums/${album}/82.jpg`,
      `/Albums/${album}/83.jpg`,
      `/Albums/${album}/84.jpg`,
      `/Albums/${album}/85.jpg`,
      `/Albums/${album}/86.jpg`,
      `/Albums/${album}/87.jpg`,
      `/Albums/${album}/88.jpg`,
      `/Albums/${album}/89.jpg`,
      `/Albums/${album}/90.jpg`,
      `/Albums/${album}/91.jpg`,
      `/Albums/${album}/92.jpg`,
      `/Albums/${album}/93.jpg`,
      `/Albums/${album}/94.jpg`,
      `/Albums/${album}/95.jpg`,
      `/Albums/${album}/96.jpg`,
      `/Albums/${album}/97.jpg`,
      `/Albums/${album}/98.jpg`,
      `/Albums/${album}/99.jpg`,
      `/Albums/${album}/100.jpg`,
      `/Albums/${album}/101.jpg`,
      `/Albums/${album}/102.jpg`,
      `/Albums/${album}/103.jpg`,
      `/Albums/${album}/104.jpg`,
      `/Albums/${album}/105.jpg`,
      `/Albums/${album}/106.jpg`,
      `/Albums/${album}/107.jpg`,
      `/Albums/${album}/108.jpg`,
      `/Albums/${album}/109.jpg`,
      `/Albums/${album}/110.jpg`,
      `/Albums/${album}/111.jpg`,
      `/Albums/${album}/112.jpg`,
      `/Albums/${album}/113.jpg`,
      `/Albums/${album}/114.jpg`,
      `/Albums/${album}/115.jpg`,
      `/Albums/${album}/116.jpg`,
      `/Albums/${album}/117.jpg`,
      `/Albums/${album}/118.jpg`,
      `/Albums/${album}/119.jpg`,
      `/Albums/${album}/120.jpg`,
      `/Albums/${album}/121.jpg`,
      `/Albums/${album}/122.jpg`,
      `/Albums/${album}/123.jpg`,
      `/Albums/${album}/124.jpg`,
      `/Albums/${album}/125.jpg`,
      `/Albums/${album}/126.jpg`,
      `/Albums/${album}/127.jpg`,
      `/Albums/${album}/128.jpg`,
      `/Albums/${album}/129.jpg`,
      `/Albums/${album}/130.jpg`,
      `/Albums/${album}/131.jpg`,
      `/Albums/${album}/132.jpg`,
      `/Albums/${album}/133.jpg`,
      `/Albums/${album}/134.jpg`,
      `/Albums/${album}/135.jpg`,
      `/Albums/${album}/136.jpg`,
      `/Albums/${album}/137.jpg`,
      `/Albums/${album}/138.jpg`,
      `/Albums/${album}/139.jpg`,
      `/Albums/${album}/140.jpg`,
      `/Albums/${album}/141.jpg`,
      `/Albums/${album}/142.jpg`,
      `/Albums/${album}/143.jpg`,
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
