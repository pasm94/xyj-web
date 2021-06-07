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
      `/Albums/${album}/4.JPG`,
      `/Albums/${album}/5.JPG`,
      `/Albums/${album}/6.JPG`,
      `/Albums/${album}/7.JPG`,
      `/Albums/${album}/8.JPG`,
      `/Albums/${album}/9.jpg`,
      `/Albums/${album}/10.JPG`,
      `/Albums/${album}/11.JPG`,
      `/Albums/${album}/12.JPG`,
      `/Albums/${album}/13.JPG`,
      `/Albums/${album}/14.JPG`,
      `/Albums/${album}/15.JPG`,
      `/Albums/${album}/16.JPG`,
      `/Albums/${album}/17.JPG`,
      `/Albums/${album}/18.JPG`,
      `/Albums/${album}/19.JPG`,
      `/Albums/${album}/20.JPG`,
      `/Albums/${album}/21.jpg`,
      `/Albums/${album}/22.JPG`,
      `/Albums/${album}/23.JPG`,
      `/Albums/${album}/24.JPG`,
      `/Albums/${album}/25.JPG`,
      `/Albums/${album}/26.JPG`,
      `/Albums/${album}/27.JPG`,
      `/Albums/${album}/28.JPG`,
      `/Albums/${album}/29.JPG`,
      `/Albums/${album}/30.JPG`,
      `/Albums/${album}/31.JPG`,
      `/Albums/${album}/32.JPG`,
      `/Albums/${album}/33.JPG`,
      `/Albums/${album}/34.jpg`,
      `/Albums/${album}/35.JPG`,
      `/Albums/${album}/36.jpg`,
      `/Albums/${album}/37.jpg`,
      `/Albums/${album}/38.jpg`,
      `/Albums/${album}/39.jpg`,
    ];
  } else if (router.asPath.includes('places')) {
    album = 'Places';
    imgs = [
      `/Albums/${album}/0.JPG`,
      `/Albums/${album}/1.jpg`,
      `/Albums/${album}/2.jpg`,
      `/Albums/${album}/3.JPG`,
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
  );
}
