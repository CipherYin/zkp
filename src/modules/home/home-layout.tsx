'use client'
import { useUserStore } from '@/store/userStore';
import Link from 'next/link'
import { usePathname } from 'next/navigation'



export const HomeLayout = () => {
  const pathname = usePathname()
  const userInfo = useUserStore((state) => state.userInfo);
  const clearUserInfo = useUserStore((state) => state.clearUserInfo); 

  const navItems = [
    { name: 'Tutorial', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Quests', href: '/quests' },
  ] 
  const handleLogout = () => {
    clearUserInfo(); 
   
  };
  
  return (
    <nav className="flex justify-around space-x-12 py-4 pb-0 border-b border-grays text-sm">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
            <Link
              key={item.name}
              href={item.href}
              className="relative font-medium text-sm 2xl:text-lg px-2 2xl:px-10 pb-1 hover:text-blue-500 transition-colors"
            >
              <span>{item.name}</span>
              
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 w-[100%] 2xl:w-[200%]  2xl:-translate-x-1/4 transition-all ${
                  isActive ? 'bg-purple' : 'bg-transparent'
                }`}
              />
            </Link>          
        )
      })}
      
        {userInfo ? (
          <button
            onClick={handleLogout} 
            className="relative font-medium text-sm  2xl:text-lg px-10 pb-1 hover:text-blue-500 transition-colors"
        >
          <span>LOGOUT</span>
        </button>         
 
        ) : (
          <Link
             
          href={`https://galxe.com/oauth?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=Email Twitter Discord Github EVMAddress SolanaAddress&redirect_uri=${window.location.origin}/oauth/callback&state=randomstring`}
          className="relative font-medium text-sm  2xl:text-lg px-10 pb-1 hover:text-blue-500 transition-colors"
        >
          <span>Connect galxe</span>
        </Link>  
      )
      }
               
     
    </nav>
  );
};

