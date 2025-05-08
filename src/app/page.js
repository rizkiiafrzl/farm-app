'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
<<<<<<< HEAD
    router.push('/auth/login');
=======
    router.push('/dashboard');
>>>>>>> f65ae7cb2b3b00917723eb89c06f45612dfdf1db
  }, [router]);

  return null;
}
