'use client'

import { useRef, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

const CustomScrollbar = ({ children, className = '' }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const thumbRef = useRef<HTMLDivElement>(null)

  const [thumbHeight, setThumbHeight] = useState(40)
  const [thumbTop, setThumbTop] = useState(0)

  const updateThumb = () => {
    const el = containerRef.current
    if (!el) return

    const scrollRatio = el.clientHeight / el.scrollHeight
    const thumbHeight = el.clientHeight * scrollRatio
    const thumbTop = (el.scrollTop / el.scrollHeight) * el.clientHeight

    setThumbHeight(thumbHeight)
    setThumbTop(thumbTop)
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    updateThumb()
    el.addEventListener('scroll', updateThumb)
    return () => el.removeEventListener('scroll', updateThumb)
  }, [])

  return (
    <div className={`relative h-full w-full ${className}`}>
      <div
        ref={containerRef}
        className="h-full overflow-y-scroll pr-4"
        style={{ scrollbarWidth: 'none' }}
      >
        {children}
      </div>
      <div className="absolute right-0 top-0 w-[16px] h-full bg-scroll-track bg-repeat-y bg-center">
        <div
          ref={thumbRef}
          className="bg-scroll-thumb bg-no-repeat bg-center bg-contain"
          style={{
            height: `${thumbHeight}px`,
            transform: `translateY(${thumbTop}px)`,
          }}
        />
      </div>
    </div>
  )
}

export default CustomScrollbar
