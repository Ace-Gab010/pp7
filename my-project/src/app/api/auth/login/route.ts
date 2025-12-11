import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const externalApiUrl = 'https://nestjs-amparado-ace-1.onrender.com/auth/login';

    const response = await fetch(externalApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Login API route error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}