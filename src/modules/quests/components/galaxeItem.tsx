import Image from "next/image";

const GalaxeItem = () => {
   
  
  return (
    <>
        <div className="flex flex-col gap-8 lg:flex-row justify-between">
            
                <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-14 w-full">
                    <div  className="-mr-10">
                       <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[24vw] lg:w-[14vw]  2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-3">Study more about ZEROBASE</h3>

                                <div className="mt-2">
                                    <Image src='/images/quests/10xp.svg' width={0} height={0} alt='sxp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                        </div>
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 pt-14 lg:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw] 2xl:w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
                    <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-14 w-full">
                    <div  className="-mr-10">
                       <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[24vw] lg:w-[14vw]  2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-3">Interact with us on X</h3>

                                <div className="mt-2">
                                    <Image src='/images/quests/37xp.svg' width={0} height={0} alt='sxp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
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
                    <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-14 w-full">
                    <div  className="-mr-10">
                       <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[24vw] lg:w-[14vw]  2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-3">Join and engage in community</h3>

                                <div className="mt-2">
                                    <Image src='/images/quests/110xp.svg' width={0} height={0} alt='110xp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
                        </div>
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 pt-14 lg:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[24vw] lg:w-[8vw] 2xl:w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
                    <div className="flex bg-[#FFFBF7] rounded-xl py-8 px-3 lg:p-12 shadow-lg gap-14 w-full">
                    <div  className="-mr-10">
                       <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[24vw] lg:w-[14vw]  2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between lg:h-full">
                            <h3 className="font-medium text-[2.7vw] lg:text-base 2xl:text-xl pt-3">Stake more with 8% Yield</h3>

                                <div className="mt-2">
                                    <Image src='/images/quests/1100xp.svg' width={0} height={0} alt='110xp' className='w-[11vw] lg:w-[5vw] 2xl:w-[4vw]'/>
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
