import Link from 'next/link';
import Album from './album';

export default function Home() {
  return (
    <>
      <h1>next</h1>
      <Link href='album'>
        <a>go to album</a>
      </Link>
    </>
  );
}
