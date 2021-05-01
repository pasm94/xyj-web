import { useRouter } from 'next/router';
import { Container, Image, Photos, Title } from '@/styles/pages/albums/slug';

export default function Album() {
  const router = useRouter();

  let album = '';
  if (router.asPath.includes('hades')) {
    album = 'Hades';
  } else if (router.asPath.includes('nature')) {
    album = 'Nature';
  } else if (router.asPath.includes('places')) {
    album = 'Places';
  }

  return (
    <Container>
      <Title>
        <span>{album}</span>
      </Title>
      <Photos>
        <Image src={`/Albums/${album}/1.jpg`}></Image>
        <Image src={`/Albums/${album}/2.jpg`}></Image>
        <Image src={`/Albums/${album}/3.jpg`}></Image>
        <Image src={`/Albums/${album}/4.jpg`}></Image>
        <Image src={`/Albums/${album}/5.jpg`}></Image>
        <Image src={`/Albums/${album}/6.jpg`}></Image>
        <Image src={`/Albums/${album}/7.jpg`}></Image>
        <Image src={`/Albums/${album}/8.jpg`}></Image>
        <Image src={`/Albums/${album}/9.jpg`}></Image>
      </Photos>
    </Container>
  );
}
