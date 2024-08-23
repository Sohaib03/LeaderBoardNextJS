"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Import Link from next/link
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { rootPath } from '../apiPath';

export function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(rootPath + '/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }).then((response) => response.json());

      console.log("Response ", response);
      const token = response.token; // Assuming the token is returned in the response

      console.log("Token ", token);
      localStorage.setItem("token", token);
      localStorage.setItem("username", response.username);
      localStorage.setItem("userid", response.userid);
      router.push('/home');
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Sohaib"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button type="submit" className="w-full">
            Sign in
          </Button>
          <div className="text-center">
            Not a user?{' '}
            <Link href="/register" passHref>
              <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer">
                Sign up
              </span>
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
