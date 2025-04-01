'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { useState } from 'react'




const navItems = [
    { name: 'Tutorial', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Quests', href: '/quests' },
    {name:'Connect galxe',href:'/quests'}
  ] 
export const HomeLayout = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-around space-x-12 py-4 pb-0 border-b border-grays text-sm">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.name}
            href={item.href}
            className="relative font-medium text-lg px-10 pb-1 hover:text-blue-500 transition-colors"
          >
            <span>{item.name}</span>
            
            <span
              className={`absolute left-0 -bottom-0.5 h-0.5 w-[200%] -translate-x-1/4 transition-all ${
                isActive ? 'bg-purple' : 'bg-transparent'
              }`}
            />
          </Link>
        )
      })}

     
    </nav>
  );
};

