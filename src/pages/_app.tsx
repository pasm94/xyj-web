import { HeaderMenu } from '@/components/HeaderMenu';
import GlobalStyle from '@/styles/GlobalStyle';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import '../styles/components/SwiperCarousel/swiper.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <GlobalStyle />
      <HeaderMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
