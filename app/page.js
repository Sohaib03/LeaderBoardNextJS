"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login'); // Redirect to login page by default
  }, [router]);

  return null; // or a loading spinner
}
