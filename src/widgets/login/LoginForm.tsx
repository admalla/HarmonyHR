"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation } from '@apollo/client';
import {useState} from "react";
import {useRouter} from "next/navigation";
import {LOGIN_MUTATION} from "@/services/apollo/apollo-requests";



export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useMutation(LOGIN_MUTATION);

  const onHandlerClick = async () => {
    try {
      const response = await login({ variables: { email, password } });

      if (response.data?.login) {
        const { access_token, refresh_token } = response.data.login;
        const newExpiresAt = Date.now() + 15 * 60 * 1000;

        localStorage.setItem('accessToken', access_token);
        localStorage.setItem('refreshToken', refresh_token);
        localStorage.setItem('tokenExpiresAt', newExpiresAt.toString());

        router.push('/');
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@mail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onHandlerClick} className="w-full">Sign in</Button>
      </CardFooter>
    </Card>
  )
}
