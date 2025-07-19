'use client';

import { useRouter } from 'next/navigation';

export default function BackButton({ children, ...props }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} {...props}>
      {children}
    </button>
  );
}
