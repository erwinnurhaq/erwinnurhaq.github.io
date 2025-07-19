import Link from 'next/link';

export default function BlogsPage() {
  return (
    <div>
      <h1>Blogs Page</h1>
      <Link href={'/blog/a'}>Blog A</Link>
      <Link href={'/blog/b'}>Blog B</Link>
      <Link href={'/blog/c'}>Blog C</Link>
    </div>
  );
}
