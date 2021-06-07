import {
  Container,
  Album,
  AlbumTitle,
  AlbumImage,
} from '@/styles/pages/albums';
import Head from 'next/head';
import Link from 'next/link';

export default function Albums() {
  return (
    <>
      <Head>
        <title>Xenia Yasmin | Albums</title>
      </Head>
      <Container>
        {/* <Link href='/albums/hades'>
        <a>
          <Album id='firstAlbum'>
            <AlbumTitle>Hades</AlbumTitle>
            <AlbumImage src='Albums/index/hades.jpg' />
          </Album>
        </a>
      </Link> */}

        <Link href='/albums/nature'>
          <a>
            <Album>
              <AlbumTitle>Nature</AlbumTitle>
              <AlbumImage src='Albums/index/nature.jpg' />
            </Album>
          </a>
        </Link>

        <Link href='/albums/places'>
          <a>
            <Album>
              <AlbumTitle>Places</AlbumTitle>
              <AlbumImage src='Albums/index/places.jpg' />
            </Album>
          </a>
        </Link>

        <Link href='/albums/art'>
          <a>
            <Album>
              <AlbumTitle>Art</AlbumTitle>
              <AlbumImage src='Albums/index/art.jpg' />
            </Album>
          </a>
        </Link>
      </Container>
    </>
  );
}
