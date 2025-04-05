import Image from "next/image";

const GalaxeItem = () => {
   
  
  return (
    <>
        <div className="flex justify-between">
                    <div className="w-full lg:w-[48%] flex bg-[#FFFBF7] rounded-xl py-8 p-12 shadow-lg gap-14">
                        <div  className="-mr-10">
                                <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[14vw] 2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between h-full">
                                <h3 className="font-medium text-lg 2xl:text-xl pt-3">Study more about ZEROBASE</h3>
                                <div className="mt-2">
                                    <Image src='images/quests/10xp.svg' width={0} height={0} alt='sxp' className='w-[4vw]'/>
                        </div>
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 2xl:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
                    <div className="w-full lg:w-[48%] flex bg-[#FFFBF7] rounded-xl py-8 p-12 shadow-lg gap-14">
                        <div  className="-mr-10">
                                <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[14vw] 2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between h-full">
                                <h3 className="font-medium text-lg 2xl:text-xl pt-3">Interact with us on X</h3>
                                <div className="mt-2">
                                    <Image src='images/quests/37xp.svg' width={0} height={0} alt='sxp' className='w-[4vw]'/>
                        </div>
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 2xl:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
      
        </div>

        <div className="flex justify-between">
                    <div className="w-full lg:w-[48%] flex bg-[#FFFBF7] rounded-xl py-8 p-12 shadow-lg gap-14">
                        <div  className="-mr-10">
                                <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[14vw] 2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between h-full">
                                <h3 className="font-medium text-lg 2xl:text-xl pt-3">Join and engage in community</h3>
                                <div className="mt-2">
                                    <Image src='images/quests/110xp.svg' width={0} height={0} alt='sxp' className='w-[4vw]'/>
                        </div>
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 2xl:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
                    <div className="w-full lg:w-[48%] flex bg-[#FFFBF7] rounded-xl py-8 p-12 shadow-lg gap-14">
                        <div  className="-mr-10">
                                <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[14vw] 2xl:w-[8vw]'/>
                        </div>
                
                        <div className="flex-1 flex flex-col justify-between h-full">
                                <h3 className="font-medium text-lg 2xl:text-xl pt-3">Stake more with 8% Yield</h3>
                                <div className="mt-2">
                                    <Image src='images/quests/1100xp.svg' width={0} height={0} alt='sxp' className='w-[4vw]'/>
                        </div>
                        {/* <div className="text-gray-600 text-sm mb-4 mt-4">{data.description}</div> */}
                                <div className='flex gap-16 2xl:pt-28 pb-4 rounded-xl items-center'>
                                    <button>
                                        <Image src='/images/quests/explore.svg' width={0} height={0} alt='upload' className='w-[7vw] hover-float'/>
                                    </button>
                                   
                                </div>
                                
                        </div>
                    </div>
      
        </div>
    </>
    
    
  );
};

export default GalaxeItem;
