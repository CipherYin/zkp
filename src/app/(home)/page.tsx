'use client'

import Image from "next/image";

import useModal from "@/hooks/useModal";
import GlobalModal from "@/components/ui/global-modal";
export default function Home() {
  const { isOpen, openModal, closeModal, modalData } = useModal()

  return (
    <div className="w-full relative  bg-tutorialblue rounded-3xl lg:rounded-3xl pb-10 pt-32 lg:px-10">
       <div className="z-10 absolute top-11 left-0 right-0 flex justify-between px-6 lg:px-16">
            {/* 1up */}
                <div className="flex flex-col gap-2">
                  <Image
                    src="/images/1up.svg"
                    alt="1UP"
                    width={0}
                    height={0}
                    className="w-[10vw] lg:w-[3vw] "
                  />
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                     className="w-[10vw] lg:w-[3vw]"
                  />
                </div>
                {/* 2up */}
                <div className="flex flex-col gap-2">
                  <Image
                    src="/images/2up.svg"
                    alt="2UP"
                    width={0}
                    height={0}
                    className="w-[10vw] lg:w-[3vw]"
                  />
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={0}
                    height={0}
                    className="w-[10vw] lg:w-[3vw]"
                  />
                </div>
        </div>
            <div className="z-10 absolute left-1/2 -translate-x-1/2 flex text-center items-center top-24">
              <Image
                src="/images/hiscore.svg"
                alt="HI-SCORE"
                width={0}
                height={0}
                className="w-[25vw] lg:w-[8vw]"
              />
            </div>
            <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center text-center gap-5">
              <Image
                    src="/images/connect.svg"
                    alt="Connect"
                    width={0}
                    height={0}
                    className="w-[90vw] lg:w-[24vw]"
              />
              <div className="lg:w-[15.6vw]">
                    <Image
                          src="/images/galxe.svg"
                          alt="Galaxe"
                          width={0}
                          height={0}
                          className="w-[30vw] lg:ml-0 lg:w-[20vw]"
                    />
                </div>
              
          </div>
          <div className="z-10 absolute top-3/4 left-1/2  flex flex-col items-center text-center gap-4 lg:gap-10">
                <Image
                    src="/images/1player.svg"
                    alt="star"
                    width={0}
                    height={0}
                    className="w-[35vw] lg:w-[16vw]  -translate-x-2/3"
                  />
                   <Image
                    src="/images/2player.svg"
                    alt="star"
                    width={0}
                    height={0}
                    className="w-[28vw]  -translate-x-2/3 lg:w-[13vw] -ml-2"
                  />
          </div>

          <div className="z-10 absolute bottom-10 ml-6">
                  <Image
                    src="/images/credits.svg"
                    alt="star"
                    width={0}
                    height={0}
                    className="w-[30vw] lg:w-[13vw]"
                  />
          </div>

      <div className="w-full relative aspect-[16/26] lg:aspect-[1000/600] bg-tutorialblue">
          <Image
              src="/images/map.png"
              alt="map"
              fill
              className="object-cover object-[70%_30%] lg:object-[0%_0%] opacity-50"
            />
             {/* <div className="absolute top-[41.5%] left-[13%]">
              <button onClick={()=>{
              openModal({
                title: <Image
                          src="/images/zerobase.svg"
                          alt="Zerobase"
                          width={250}
                          height={250}
                        />,
                content: (
                  <>
                   <p>v2: We live in a world where every online transaction and piece of data is exposed to prying eyes, leading to identity theft, fraud, and the erosion of our most personal secrets</p>
                    <p className="mt-12">v2: Our primary objective is to overcome existing limitations and make zero-knowledge cryptography accessible to everyone. We have already built the most competitive zero-knowledge prover network across speed, cost, security, and privacy. Next, we are expanding into use cases that were previously far beyond the borders of blockchain.</p>

                  </>
                )
              })
            }}>
              <Image src="/images/mark-icon.svg" alt="icon" width={0} height={0}   
              className="w-[1.5vw] transition-transform duration-200 hover:-translate-y-1 hover:scale-110"
              />
            </button>

          
          </div>
          <div className="absolute top-[9%] right-[32%]">
            <button onClick={()=>{
              openModal({
                title: <Image
                          src="/images/zerobase.svg"
                          alt="Zerobase"
                          width={250}
                          height={250}
                        />,
                content: (
                  <>
                   <p>v3: We live in a world where every online transaction and piece of data is exposed to prying eyes, leading to identity theft, fraud, and the erosion of our most personal secrets</p>
                    <p className="mt-12">v3: Our primary objective is to overcome existing limitations and make zero-knowledge cryptography accessible to everyone. We have already built the most competitive zero-knowledge prover network across speed, cost, security, and privacy. Next, we are expanding into use cases that were previously far beyond the borders of blockchain.</p>

                  </>
                )
              })
            }}>
              <Image src="/images/mark-icon.svg" alt="icon" width={0} height={0}   
              className="w-[1.5vw] transition-transform duration-200 hover:-translate-y-1 hover:scale-110"
              />
            </button>

           
          </div>

          <div className="absolute top-[30%] right-[18%]">
            <button onClick={()=>{
              openModal({
                title: <Image
                          src="/images/zerobase.svg"
                          alt="Zerobase"
                          width={250}
                          height={250}
                        />,
                content: (
                  <>
                   <p>v1: We live in a world where every online transaction and piece of data is exposed to prying eyes, leading to identity theft, fraud, and the erosion of our most personal secrets</p>
                    <p className="mt-12">v1: Our primary objective is to overcome existing limitations and make zero-knowledge cryptography accessible to everyone. We have already built the most competitive zero-knowledge prover network across speed, cost, security, and privacy. Next, we are expanding into use cases that were previously far beyond the borders of blockchain.</p>

                  </>
                )
              })
            }}>
              <Image src="/images/mark-icon.svg" alt="icon" width={0} height={0}   
              className="w-[1.5vw] h-auto transition-transform duration-200 hover:-translate-y-1 hover:scale-110"
              />
              </button>
          </div> */}

          <div className="absolute top-[53%] right-[7.8%] lg:top-[54%] lg:right-[19.8%]">
          <button 
              onClick={()=>{
              openModal({
               
                content: (
                  <div className="flex flex-col  gap-4 lg:gap-6 2xl:gap-8  font-medium">
                    <div>
                    {/* Join                         in making history with an unprecedented  */}
                        <div className="flex flex-wrap text-[3.5vw]  sm:text-[2.5vw] lg:text-[1.2vw] gap-1 2xl:text-2xl lg:mb-2 leading-none mt-3">
                          Join
                          <Image src="/zerobase.svg" width={0} height={0} alt="zerobase" className="w-[17vw] sm:w-[13vw] lg:w-[6vw] 2xl:w-[6vw]"/>
                            <span className="whitespace-nowrap">in</span> 
                            <span className="whitespace-nowrap"> making</span>
                            <span className="whitespace-nowrap"> history </span>
                            <span className="whitespace-nowrap">with</span>
                            <span className="whitespace-nowrap">an</span>
                           <span className="whitespace-nowrap">unprecedented</span>
                          <Image src="/guinness.svg" width={0} height={0} alt="zerobase" className="w-[33vw] sm:w-[28vw] lg:w-[14vw] 2xl:w-[13vw]"/>
                        </div>
                        <div className="text-[3vw] sm:text-[2vw] sm:mt-4 lg:mt-0 lg:text-[1vw] 2xl:text-lg font-light break-keep leading-none mt-2">
                          “Most contributions to a trusted setup for a Zero-Knowledge Proof (ZKP) in 2 month timeframe”
                        </div>
                    </div>
                    <div className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] 2xl:text-2xl">
                        Supporters
                        <div className="text-[3vw] sm:text-[2vw] lg:text-[1vw] 2xl:text-lg font-light leading-none">
                          OKX Wallet, Hashkey Global, Galxe
                        </div>
                    </div>
                   <div  className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] 2xl:text-2xl">
                      Our Goals
                      <div className="text-[3vw]  sm:text-[2vw] lg:text-[1vw] 2xl:text-lg font-light break-keep leading-none">
                        Establish a robust foundation for Gnark’s universal trusted setup.
                      </div>
                      <div className="text-[3vw]  sm:text-[2vw] lg:text-[1vw] 2xl:text-lg font-light mt-2 break-keep leading-none">
                        Accelerate global adoption of Zero-Knowledge Proof (ZKP) technology.
                      </div>
                   </div>
                    
                    <div  className="text-[3.5vw] sm:text-[2.5vw] lg:text-[1.2vw] 2xl:text-2xl">
                      Rewards
                      <div className="text-[3vw]  sm:text-[2vw] lg:text-[1vw] 2xl:text-lg font-light break-keep leading-none">
                        A total prize pool of 15,000,000 ZB tokens.
                      </div>
                      <div className="text-[3vw]  sm:text-[2vw] lg:text-[1vw] 2xl:text-lg font-light  sm:mt-4 lg:mt-2 mt-2  break-keep leading-none">
                        Exclusive Prize pool from Hashkey Global and other supporters.
                      </div>
                      <div className="text-[3vw]  sm:text-[2vw] lg:text-[1vw] 2xl:text-lg font-light  sm:mt-4 lg:mt-2  mt-2 break-keep leading-none">
                        Exclusive Guinness World Record Participation Certificates for all contributors.
                      </div>
                    </div>
                    
                  </div>
                )
              })
            }}>
              <Image src="/images/mark-icon.svg" alt="icon" width={0} height={0}   
              className="w-[5vw] lg:w-[1.5vw] transition-transform duration-200 hover:-translate-y-1 hover:scale-110"
              />
              </button>
          </div>
          <GlobalModal
              isOpen={isOpen}
              onClose={closeModal}
              title={modalData.title}
              content={modalData.content}
            />
            
      </div>
          
           
           
           

            

   
      </div>
       
  );
}
