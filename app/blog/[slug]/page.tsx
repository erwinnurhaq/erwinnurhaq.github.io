import { readdir } from 'fs/promises';
import BackButton from '~/components/BackButton';

export default async function BlogItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div>
      <h1>Blog item page {slug}</h1>
      <BackButton>Back</BackButton>
    </div>
  );
}

export async function generateStaticParams() {
  const entries = await readdir('./public/blog', { withFileTypes: true });
  const dirs = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}
