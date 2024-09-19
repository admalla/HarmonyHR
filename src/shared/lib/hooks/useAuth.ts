"use client"

export const useAuth = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  return {
    isAuth: !!token,
    token
  }
}