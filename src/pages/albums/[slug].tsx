import { useRouter } from 'next/router';

export default function Album() {
  const router = useRouter();

  let test = '';
  if (router.asPath.includes('hades')) {
    test = 'Hades';
  } else if (router.asPath.includes('nature')) {
    test = 'Nature';
  } else if (router.asPath.includes('people')) {
    test = 'People';
  } else if (router.asPath.includes('places')) {
    test = 'Places';
  }

  return (
    <>
      <p>{test}</p>
      <p>{router.asPath}</p>
    </>
  );
}

/* <Link href='/albums/hades'>
        <a>Hades</a>
      </Link>

      <Link href='/albums/nature'>
        <a>Nature</a>
      </Link>

      <Link href='/albums/people'>
        <a>People</a>
      </Link>

      <Link href='/albums/places'> */
