import { HeaderMenu } from '@/components/HeaderMenu';
import GlobalStyle from '@/styles/GlobalStyle';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/components/SwiperCarousel/swiper.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HeaderMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
