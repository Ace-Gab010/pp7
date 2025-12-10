'use client';

import { API_BASE } from '@/lib/config';
import { useRouter } from 'next/navigation';
import { saveToken } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    console.log('API_BASE:', API_BASE);
    console.log('Attempting login with username:', username);

    try {
      const res = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);

      if (!res.ok) {
        setError(data.message || 'Invalid credentials');
        setLoading(false);
        return;
      }

      // Ensure server returned an accessToken before treating login as successful
      const token = data?.accessToken;
      const looksLikeJwt = typeof token === 'string' && token.split('.').length === 3;
      console.log('Token received:', token ? 'Yes' : 'No', 'Looks like JWT:', looksLikeJwt);

      if (!token || !looksLikeJwt) {
        // Server responded OK but didn't provide a valid token
        setError(data.message || 'Login did not return a valid token');
        setLoading(false);
        return;
      }

      saveToken(token);
      router.push('/dashboard');
    } catch (e) {
      console.error('Login error:', e);
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background like app root: animated gradient + floating blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 animate-gradient z-0"></div>
      <div className="absolute rounded-full bg-white/10 w-48 h-48 top-1/3 left-10 z-0 blob-a" />
      <div className="absolute rounded-full bg-blue-500/20 w-60 h-60 bottom-1/4 right-10 z-0 blob-b" />
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-0"></div>

      <div className="w-full max-w-md z-10">
        <div className="bg-white rounded-lg shadow-sm border border-blue-300 p-8 animate-fadeInUp">
          <h1 className="text-3xl font-bold mb-2 gradient-text">LOGIN</h1>
          <p className="text-slate-500 text-sm mb-8">Enter your credentials to access</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="your username"
                className="w-full"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full"
                required
                disabled={loading}
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-emerald-500 text-white hover:from-indigo-700 hover:to-emerald-600 transform transition hover:scale-105" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Don't have an account?{' '}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}