'use client'
import { useGalxeAuthUrl } from '@/hooks/useGalxeAuthUrl';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/store/userStore';
import Link from 'next/link'
import { usePathname } from 'next/navigation'



export const HomeLayout = () => {
  const pathname = usePathname()
  const userInfo = useUserStore((state) => state.galxeUserInfo);
  const clearUserInfo = useUserStore((state) => state.clearGalxeUserInfo); 
  const clearZkpUserInfo = useUserStore((state) => state.clearZkpUserInfo); 
  const clearToken = useUserStore((state) => state.clearToken); 
  const galxeUrl = useGalxeAuthUrl()

  const navItems = [
    { name: 'Tutorial', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Quests', href: '/quests' },
  ] 
  const handleLogout = () => {
    clearUserInfo(); 
    clearZkpUserInfo();
    clearToken()
  };
 
  return (
    <nav className="flex px-6 overflow-x-auto scrollbar-hide justify-around space-x-12 py-4 pb-0 border-b border-grays">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(`relative  flex-shrink-0  font-medium text-[3vw] md:text-[2vw] lg:text-[1.2vw] 2xl:text-[1vw] px-2 lg:px-10 pb-1 hover:text-blue-500 transition-colors`,
                  isActive ? 'border-b-purple border-b-2' : 'bg-transparent')
              }
            >
              <span>{item.name}</span>
              
              {/* <span
                className={`absolute left-0 -bottom-0.5 h-0.5 w-[100%] lg:w-[200%]  lg:-translate-x-1/4 transition-all ${
                  isActive ? 'bg-purple' : 'bg-transparent'
                }`}
              /> */}
            </Link>          
        )
      })}
      
        {userInfo ? (
          <button
            onClick={handleLogout} 
            className="relative font-medium text-[3vw] md:text-[2vw]  lg:text-[1.2vw] 2xl:text-[1vw] px-10 pb-1 hover:text-blue-500 transition-colors"
        >
          <span>LOGOUT</span>
        </button>         
 
        ) : (
          <Link 
          href={galxeUrl}
          className="relative  flex-shrink-0 font-medium text-[3vw] md:text-[2vw]  lg:text-[1.2vw] 2xl:text-[1vw] px-10 pb-1 hover:text-blue-500 transition-colors"
        >
          <span>Connect Galxe</span>
        </Link>  
      )
      }
               
     
    </nav>
  );
};


