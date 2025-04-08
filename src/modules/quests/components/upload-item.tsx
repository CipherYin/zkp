'use client'
import Tooltip from "@/components/ui/tooltip";
import Image from "next/image";
import { useRef, useState } from "react";
import useMedia from "use-media";
import { toast } from 'sonner'
import { useUserStore } from "@/store/userStore";
import { useGalxeAuthUrl } from "@/hooks/useGalxeAuthUrl";
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";
import { getUserProfile, uploadUserImage } from "@/util/axios";
import { useZkpRefresh } from "@/hooks/useZkpRefresh";

export default function UploadItem(){
    const isSmallDevice = useMedia({ maxWidth: '768px' });
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const router = useRouter()
    const galxeUrl = useGalxeAuthUrl()
    const [loadingFile, setFileLoading] = useState(false)
    const { refresh, loading } = useZkpRefresh()

    const token = useUserStore((state) => state.token);
    const zkpUserInfo = useUserStore((state) => state.zkpUserInfo);
    const setZkpUserInfo = useUserStore((state) => state.setZkpUserInfo);

    const handleClick = () => {
        if(!token){
            router.push(galxeUrl)
            return
        }
        fileInputRef.current?.click()
      }
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(!token){
            router.push(galxeUrl)
            return
        }
        try{
            if (file) {
                setFileLoading(true)
                await uploadUserImage(file, token)
                const res = await getUserProfile(token)
                setZkpUserInfo(res)     
            }
        }catch (error){
            console.log(error)
            toast.error("failed")
        }finally{
            setFileLoading(false)
        }
    }
 
    return (
       <div className='flex bg-[#D9D9D9] rounded-xl'>
              <div className="flex bg-[#FFFBF7] rounded-xl py-4 px-3 lg:p-6 2xl:p-12 shadow-lg gap-2 2xl:gap-6 w-full">
              <div className="relative w-[19vw] h-[30vw] lg:w-[8.5vw] lg:h-[12vw] 2xl:w-[8.5vw] 2xl:h-[12vw] overflow-hidden rounded-xl">
                    <Image
                        src="/images/quests/upload-img.jpeg"
                        alt="icon"
                        fill
                        className="object-cover object-center" 
                    />
                    </div>


                   {/* <div className="-mr-10 bg-black">
                       <Image src='/images/quests/upload-img.jpeg' alt="icon" width={10} height={40}  className='object-cover lg:w-[14vw]  2xl:w-[8vw]'/>
                   </div> */}
       
                   <div className="flex-1 flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <h3 className="font-medium text-[2.7vw] lg:text-[1vw] 2xl:text-lg pt-3">Upload a random photo</h3>
                            <Tooltip content="Tooltip on top-left" position="bottom-left">
                                <div className="">
                                    <Image src='/images/quests/sxp.svg' width={0} height={0} alt='sxp' className='w-[11vw] lg:w-[3.5vw] 2xl:w-[4vw]'/>
                                </div>
                            </Tooltip>
                            
                            <div className="text-gray-600 text-[1.9vw] mt-2 lg:text-[0.75vw] 2xl:text-sm mb-4 lg:mt-4">Mandatory for Guinness World Record Participation</div>
                        </div>
                       
                       {
                        !isSmallDevice&&(
                            zkpUserInfo?.results?.image  ? (
                                <div className="flex gap-4 justify-end">
                                  <Image
                                    src="/images/quests/button-right.svg"
                                    width={0}
                                    height={0}
                                    alt="uploaded"
                                    className="w-[4vw] lg:w-[1.5vw] 2xl:w-[1.5vw]"
                                  />
                                  <button onClick={refresh}>
                                    <Image 
                                        src="/images/quests/button-refresh.svg"
                                        width={0} 
                                        height={0} 
                                        alt='upload' 
                                        className={cn('2xl:w-[1.5vw]  w-[3vw] lg:w-[1.5vw] hover-float',(loading||loadingFile)&&"animate-spin")}/>

                                  </button>
                                
                                </div>
                              ) : (<div className='flex justify-end gap-16 rounded-xl items-center'>
                            <button onClick={handleClick}>
                                <Image src='/images/quests/button-upload.svg' width={0} height={0} alt='upload' className='w-[16vw] lg:w-[7.5vw]  2xl:w-[7vw] hover-float'/>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </button>
                            <div className='flex gap-4'>
                                <Image src="/images/quests/button-x.svg" width={0} height={0} alt='upload' className='2xl:w-[1.5vw] w-[3vw] lg:w-[1.5vw] hover-float'/>
                                <button onClick={refresh}>
                                    <Image 
                                        src="/images/quests/button-refresh.svg"
                                        width={0} 
                                        height={0} 
                                        alt='upload' 
                                        className={cn('2xl:w-[1.5vw]  w-[3vw] lg:w-[1.5vw] hover-float',(loading||loadingFile)&&"animate-spin")}/>
                                </button>
                                
                            </div>
                        </div>)
                        )
                       }
                        {
                        isSmallDevice&&(
                            zkpUserInfo?.results?.image  ? (
                                <div className="flex gap-4 justify-end">
                                  <Image
                                    src="/images/quests/button-right.svg"
                                    width={0}
                                    height={0}
                                    alt="uploaded"
                                    className="w-[4vw] lg:w-[2vw] 2xl:w-[1.5vw]"
                                  />
                                  <button onClick={refresh}>
                                    <Image 
                                        src="/images/quests/button-refresh.svg"
                                        width={0} 
                                        height={0} 
                                        alt='upload' 
                                        className={cn('2xl:w-[1.5vw]  w-[4vw] lg:w-[2vw] hover-float',(loading||loadingFile)&&"animate-spin")}/>

                                  </button>
                               
                                </div>
                              ) :
                            <div className='flex justify-between gap-16 sm:gap-36 rounded-xl items-center'>
                                <div className='flex gap-2 sm:gap-4  lg:gap-4'>
                                    <Image src="/images/quests/button-x.svg" width={0} height={0} alt='upload' className='w-[4vw] lg:w-[2vw] 2xl:w-[1.5vw]'/>
                                    <button onClick={refresh}>
                                        <Image 
                                        src="/images/quests/button-refresh.svg"
                                        width={0} 
                                        height={0} 
                                        alt='upload' 
                                        className={cn('2xl:w-[1.5vw]  w-[4vw] lg:w-[2vw] hover-float',(loading||loadingFile)&&"animate-spin")}/>
                                    </button>
                                    
                                   
                                </div>
                            <button onClick={handleClick}>
                                
                                <Image src='/images/quests/button-upload.svg' width={0} height={0} alt='upload' className='w-[21vw] sm:w-[20vw] lg:w-[10vw] 2xl:w-[7vw] hover-float'/>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </button>
                           
                        </div>
                        )
                       }
                       
                   </div>
               </div>
              
           </div>
    )
}