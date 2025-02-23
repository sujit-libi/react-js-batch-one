'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BASE_URL = 'https://reqres.in';

function page() {
  const route = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleOnLogin() {
    console.log({ email, password });
    const response = await fetch(`${BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.token) {
      route.push('/dashboard');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="border-2 border-blue-600 m-8 p-8 space-y-6">
        <div>
          <label>Email</label>
          <Input
            type="email"
            value={email}
            placeholder="Example: joe@example.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={handleOnLogin}>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default page;
