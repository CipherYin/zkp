'use client'

import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { useUserStore } from '@/store/userStore'
import { useState } from 'react'
import { useGalxeAuthUrl } from '@/hooks/useGalxeAuthUrl' // 你已有的 Hook
import { getUserProfile } from '@/util/axios'

export function useZkpRefresh() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const galxeUrl = useGalxeAuthUrl()
  const token = useUserStore((state) => state.token)
  const setZkpUserInfo = useUserStore((state) => state.setZkpUserInfo)

  const refresh = async () => {
    if (!token) {
      router.push(galxeUrl)
      return
    }

    setLoading(true)
    try {
      const res = await getUserProfile(token)
      setZkpUserInfo(res)
    } catch (err) {
      toast.error('failed')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return { refresh, loading }
}
