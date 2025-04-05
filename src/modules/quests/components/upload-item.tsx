import Image from "next/image";

export default function UploadItem(){
    return (
       <div className='flex bg-[#D9D9D9] rounded-xl'>
              <div className="flex bg-[#FFFBF7] rounded-xl py-8 p-12 shadow-lg gap-14 w-full">
                   <div className="-mr-10">
                       <Image src='/images/quests/image.svg' alt="icon" width={0} height={0}  className='w-[14vw] 2xl:w-[8vw]'/>
                   </div>
       
                   <div className="flex-1 flex flex-col justify-between h-full">
                        <div className="flex flex-col">
                            <h3 className="font-medium text-lg 2xl:text-xl pt-3">Upload a random photo</h3>
                            <div className="mt-2">
                                <Image src='/images/quests/sxp.svg' width={0} height={0} alt='sxp' className='w-[4vw]'/>
                            </div>
                            <div className="text-gray-600 text-sm mb-4 mt-4">Mandatory for Guinness World Record Participation</div>
                        </div>
                       
                       <div className='flex justify-end gap-16 rounded-xl items-center'>
                           <button className="">
                               <Image src='/images/quests/button-upload.svg' width={0} height={0} alt='upload' className='w-[7vw] hover-float'/>
                           </button>
                           <div className='flex gap-4'>
                               <Image src="/images/quests/button-x.svg" width={0} height={0} alt='upload' className='w-[1.5vw] hover-float'/>
                               <Image src="/images/quests/button-right.svg" width={0} height={0} alt='upload' className='w-[1.5vw] hover-float'/>
                               <Image src="/images/quests/button-refresh.svg" width={0} height={0} alt='upload' className='w-[1.5vw] hover-float'/>
                           </div>
                       </div>
                       
                   </div>
               </div>
              
           </div>
    )
}