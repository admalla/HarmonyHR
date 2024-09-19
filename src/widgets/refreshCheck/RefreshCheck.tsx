"use client"

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import {REFRESH_TOKEN_MUTATION} from "@/services/apollo/apollo-requests";

export default function RefreshCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [refreshTokenMutation] = useMutation(REFRESH_TOKEN_MUTATION);

  useEffect(() => {
    const refreshAccessToken = async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      const tokenExpiresAt = localStorage.getItem('tokenExpiresAt')

      if (refreshToken && tokenExpiresAt && Date.now() >= Number(tokenExpiresAt)) {
        try {
          const { data } = await refreshTokenMutation({
            variables: { refreshToken },
          });

          if (data?.refreshToken?.access_token) {
            localStorage.setItem('accessToken', data.refreshToken.access_token);
            const newExpiresAt = Date.now() + 15 * 60 * 1000;
            localStorage.setItem('tokenExpiresAt', newExpiresAt.toString());
          }
        } catch (err) {
          console.error('Ошибка обновления токена:', err);
          router.push('/login');
        }
      }
    };

    refreshAccessToken();

    const interval = setInterval(() => {
      refreshAccessToken();
    }, 15.1 * 60 * 1000);

    return () => clearInterval(interval);
  }, [refreshTokenMutation, router]);

  return <>{children}</>
}
