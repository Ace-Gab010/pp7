'use client';
import { useRouter } from 'next/navigation';
import { getToken } from '@/lib/auth';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

function isTokenValid(token: string | null): boolean {
  if (!token) return false;
  try {
    jwtDecode<JwtPayload>(token);
    return true;
  } catch (e) {
    return false;
  }
}

export default function DashboardLayout({ children }: { children:
React.ReactNode }) {
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (isTokenValid(token)) {
      setIsValid(true);
    } else {
      if (token) {
        localStorage.removeItem('token');
      }
      router.push('/login');
    }
  }, [router]);

  if (!isValid) return null;

  return <>{children}</>;
}