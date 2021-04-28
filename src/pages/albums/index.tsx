import Link from 'next/link';

export default function Albums() {
  return (
    <>
      <Link href='/albums/hades'>
        <a>Hades</a>
      </Link>
      <br />
      <Link href='/albums/nature'>
        <a>Nature</a>
      </Link>
      <br />
      <Link href='/albums/people'>
        <a>People</a>
      </Link>
      <br />
      <Link href='/albums/places'>
        <a>Places</a>
      </Link>
    </>
  );
}
