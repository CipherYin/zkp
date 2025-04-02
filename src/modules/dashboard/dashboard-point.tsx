import Image from "next/image"

export const DashBoardPoint = () => {
    return (
        <div className="flex justify-between">
        <div className="relative w-[30vw] aspect-[400/150]">
            <Image
                src="/images/ui/frame.svg"
                alt="frame"
                fill
                className="object-fill"
            />
            <div className="absolute inset-0 flex flex-col justify-center mt-[1vw] px-[2vw] text-left">
                <p className="text-[#64717B] text-[0.87vw] font-medium">
                Total <span className="ml-[0.5vw]">Points</span>
                </p>
                <p className="text-black text-[1.8vw] font-medium mt-[0.5vw]">2000,000</p>
                <p className="text-[#64717B] text-[0.7vw] pb-3 font-medium">
                Points are updated everyday
                </p>
            </div>
        </div>
        <div className="relative w-[30vw] aspect-[400/150]">
        
            <Image
                src="/images/ui/frame.svg"
                alt="frame"
                fill
                className="object-fill"
            />
            <Image
                src="/images/ui/cloud.svg"
                alt="frame"
                width={0}
                height={0}
                className="absolute -top-[12%] right-[3%] w-[6vw] z-10"
            />
            
            <div className="absolute inset-0 flex flex-col justify-center mt-[1vw] px-[2vw] text-left">
                <div className="flex text-[#64717B] text-[0.87vw] font-medium gap-[0.5vw]">
                    <span>Current</span>
                    <span>prize</span>
                    <span>pool</span>
                    <span>unlock</span>
                    <span>status</span>
                </div>
              

                <div className="relative font-medium mt-[0.5vw] mb-[1vw]">
                    <Image
                        src="/images/ui/progress.svg"
                        alt="frame"
                        width={0}
                        height={0}
                        className="w-[12.5vw]"
                    />
                       <div className="absolute w-[12.5vw] inset-0 flex items-center px-[0.7vw]">
                            <div
                            className="h-[60%] w-full overflow-hidden"
                            >
                            <div
                                className="h-full bg-no-repeat bg-left"
                                style={{
                                width: `60%`,
                                backgroundImage: 'url("/images/ui/bar.svg")',
                                backgroundSize: 'auto 100%', 
                                }}
                            />
                            </div>
                        </div>
                </div>
                <p className="text-black text-[0.7vw] pb-3 font-medium">
                    2,300
                </p>
            </div>
        </div>
    </div>
    )
}