import Image from "next/image";

const GalaxeItem = () => {
   
  
  return (
    <>
        <div className="flex flex-col gap-8 lg:flex-row justify-between">
            
                <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-2 2xl:gap-6 w-full">
                                              <div className="relative w-[19vw] h-[31vw] 2xl:w-[8.5vw] 2xl:h-[12vw] overflow-hidden rounded-xl">
                                                     <Image
                                                         src="/images/quests/zerobase-img.jpeg"
                                                         alt="icon"
                                                         fill
                                                         className="object-cover object-center" 
                                                     />
                                                     <div className="absolute inset-0 flex items-center justify-center">
                                                        <Image
                                                            src="/images/quests/zerobase-font.svg"
                                                            alt="watermark"
                                                            width={0}
                                                            height={0}
                                                            className="w-[16vw] lg:w-[7vw]"
                                                        />
                                                     </div>
                                                     <div className="absolute inset-0 flex flex-col items-center justify-end mb-3">
                                                        <Image
                                                            src="/images/quests/galxe-font.svg"
                                                            alt="watermark"
                                                            width={0}
                                                            height={0}
                                                            className="w-[16vw] lg:w-[7vw]"
                                                        />
                                                     </div>
                                                 </div>
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <div>
                                <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-1 lg:pt-3">Study more about ZEROBASE</h3>

                            <div>
                            <Image src='/images/quests/10xp.svg' width={0} height={0} alt='sxp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                            </div>  
                            </div>
                            
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 pt-14 lg:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw] 2xl:w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
                    <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-2 2xl:gap-6 w-full">
                                              <div className="relative w-[19vw] h-[30vw] 2xl:w-[8.5vw] 2xl:h-[12vw] overflow-hidden rounded-xl">
                                                     <Image
                                                         src="/images/quests/zerobase-img.jpeg"
                                                         alt="icon"
                                                         fill
                                                         className="object-cover object-center" 
                                                     />
                                                      <div className="absolute inset-0 flex items-center justify-center">
                                                        <Image
                                                            src="/images/quests/zerobase-font2.svg"
                                                            alt="watermark"
                                                            width={0}
                                                            height={0}
                                                            className="w-[16vw] lg:w-[7vw]"
                                                        />
                                                     </div>
                                                     <div className="absolute inset-0 flex flex-col items-center justify-end mb-3">
                                                        <Image
                                                            src="/images/quests/galxe-font.svg"
                                                            alt="watermark"
                                                            width={0}
                                                            height={0}
                                                            className="w-[16vw] lg:w-[7vw]"
                                                        />
                                                     </div>
                                                 </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <div>
                                <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-1 lg:pt-3">Interact with us on X</h3>

                                        <div className="mt-0">
                                            <Image src='/images/quests/37xp.svg' width={0} height={0} alt='sxp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                                </div>
                            </div>
                            
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 pt-14 lg:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw] 2xl:w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
      
        </div>

        <div className="flex flex-col gap-8 lg:flex-row justify-between">
        <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-2 2xl:gap-6 w-full">
                                              <div className="relative w-[19vw] h-[31vw] 2xl:w-[8.5vw] 2xl:h-[12vw] overflow-hidden rounded-xl">
                                                     <Image
                                                         src="/images/quests/galxe-img1.jpeg"
                                                         alt="icon"
                                                         fill
                                                         className="object-cover object-right-bottom" 
                                                     />
                                                     <div className="absolute inset-0 flex items-center justify-center">
                                                        <Image
                                                            src="/images/quests/galxe-font2.svg"
                                                            alt="watermark"
                                                            width={0}
                                                            height={0}
                                                            className="w-[16vw] lg:w-[7vw]"
                                                        />
                                                     </div>
                                                 </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <div>
                                <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-1 lg:pt-3">Join and engage in community</h3>

                                <div className="mt-0">
                                    <Image src='/images/quests/110xp.svg' width={0} height={0} alt='110xp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                                </div>
                            </div>
                           
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 pt-14 lg:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw] 2xl:w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
                    <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-2 2xl:gap-6 w-full">
                                              <div className="relative w-[19vw] h-[31vw] 2xl:w-[8.5vw] 2xl:h-[12vw] overflow-hidden rounded-xl">
                                                     <Image
                                                         src="/images/quests/galxe-img2.jpeg"
                                                         alt="icon"
                                                         fill
                                                         className="object-cover object-center" 
                                                     />
                                                      <div className="absolute inset-0 flex items-center justify-center">
                                                        <Image
                                                            src="/images/quests/galxe-font2.svg"
                                                            alt="watermark"
                                                            width={0}
                                                            height={0}
                                                            className="w-[16vw] lg:w-[7vw]"
                                                        />
                                                     </div>
                                                 </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <div>
                            <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-1 lg:pt-3">Stake more with 8% Yield</h3>

                                <div className="mt-0">
                                    <Image src='/images/quests/1100xp.svg' width={0} height={0} alt='110xp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                                </div>
                            </div>
                           
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 pt-14 lg:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw] 2xl:w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
      
        </div>
    </>
    
    
  );
};

export default GalaxeItem;
