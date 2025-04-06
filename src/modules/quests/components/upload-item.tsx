'use client'
import Tooltip from "@/components/ui/tooltip";
import Image from "next/image";
import useMedia from "use-media";

export default function UploadItem(){
    const isSmallDevice = useMedia({ maxWidth: '1024px' });

    return (
       <div className='flex bg-[#D9D9D9] rounded-xl'>
              <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-14 w-full">
                   <div className="-mr-10">
                       <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[24vw] lg:w-[14vw]  2xl:w-[8vw]'/>
                   </div>
       
                   <div className="flex-1 flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <h3 className="font-medium text-[2.7vw] lg:text-xl pt-3">Upload a random photo</h3>
                            <Tooltip content="Tooltip on top-left" position="bottom-left">
                                <div className="lg:mt-2">
                                    <Image src='/images/quests/sxp.svg' width={0} height={0} alt='sxp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                                </div>
                            </Tooltip>
                            
                            <div className="text-gray-600 text-[1.9vw] mt-2 lg:text-sm mb-4 lg:mt-4">Mandatory for Guinness World Record Participation</div>
                        </div>
                       
                       {
                        !isSmallDevice&&(
                            <div className='flex justify-end gap-16 rounded-xl items-center'>
                            <button className="">
                                <Image src='/images/quests/button-upload.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw]  2xl:w-[7vw] hover-float'/>
                            </button>
                            <div className='flex gap-4'>
                                <Image src="/images/quests/button-x.svg" width={0} height={0} alt='upload' className='2xl:w-[1.5vw] lg:w-[2vw] hover-float'/>
                                <Image src="/images/quests/button-right.svg" width={0} height={0} alt='upload' className='2xl:w-[1.5vw] lg:w-[2vw] hover-float'/>
                                <Image src="/images/quests/button-refresh.svg" width={0} height={0} alt='upload' className='2xl:w-[1.5vw] lg:w-[2vw] hover-float'/>
                            </div>
                        </div>
                        )
                       }
                        {
                        isSmallDevice&&(
                            <div className='flex justify-between gap-16 sm:gap-36 rounded-xl items-center'>
                                <div className='flex gap-2 sm:gap-4  lg:gap-4'>
                                    <Image src="/images/quests/button-x.svg" width={0} height={0} alt='upload' className='w-[4vw] lg:w-[1.5vw]'/>
                                    <Image src="/images/quests/button-right.svg" width={0} height={0} alt='upload' className='w-[4vw] lg:w-[1.5vw]'/>
                                    <Image src="/images/quests/button-refresh.svg" width={0} height={0} alt='upload' className='w-[4vw] lg:w-[1.5vw] hover-float'/>
                                </div>
                            <button className="">
                                <Image src='/images/quests/button-upload.svg' width={0} height={0} alt='upload' className='w-[35vw] sm:w-[20vw] lg:w-[7vw] hover-float'/>
                            </button>
                           
                        </div>
                        )
                       }
                       
                   </div>
               </div>
              
           </div>
    )
}