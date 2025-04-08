'use client'
import { useState, useEffect } from 'react'

export function useGalxeAuthUrl(): string {
  const [url, setUrl] = useState<string | null>(null)

  useEffect(() => {
    const origin = window.location.origin
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
    const redirectUri = `${origin}/oauth/callback`

    const scope = [
      'Email',
      'Twitter',
      'Discord',
      'Github',
      'EVMAddress',
      'SolanaAddress',
    ].join('%20')

    const authUrl = `https://galxe.com/oauth?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&state=randomstring`
    setUrl(authUrl)
  }, [])

  return url?url:'/'
}
