import {
  Container,
  Photo,
} from '@/styles/components/SwiperCarousel/SwiperCarousel';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

interface SwiperCarouselProps {
  imagesSrc: string[];
  initialSlide?: number;
}

export function SwiperCarousel({
  imagesSrc,
  initialSlide = 0,
}: SwiperCarouselProps) {
  return (
    <Container>
      <Swiper initialSlide={initialSlide} navigation>
        {imagesSrc.map(img => (
          <SwiperSlide key={img}>
            <Photo src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
