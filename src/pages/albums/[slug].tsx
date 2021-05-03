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
import { CloseButton } from '@/styles/pages';
import { FiXCircle } from 'react-icons/fi';

export default function Album() {
  const router = useRouter();
  const [isSwiperCarouselOpen, setIsSwiperCarouselOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  let album = '';
  if (router.asPath.includes('hades')) {
    album = 'Hades';
  } else if (router.asPath.includes('nature')) {
    album = 'Nature';
  } else if (router.asPath.includes('places')) {
    album = 'Places';
  }

  const imgs = [
    `/Albums/${album}/0.jpg`,
    `/Albums/${album}/1.jpg`,
    `/Albums/${album}/2.jpg`,
    `/Albums/${album}/3.jpg`,
    `/Albums/${album}/4.jpg`,
    `/Albums/${album}/5.jpg`,
    `/Albums/${album}/6.jpg`,
    `/Albums/${album}/7.jpg`,
    `/Albums/${album}/8.jpg`,
  ];

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
