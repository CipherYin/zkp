'use client'

import Image from "next/image";

import useModal from "@/hooks/useModal";
import GlobalModal from "@/components/ui/global-modal";
export default function Home() {
  const { isOpen, openModal, closeModal, modalData } = useModal()

  return (
    <div className="w-full relative  bg-tutorialblue rounded-3xl pt-32 px-10">
       <div className="z-10 absolute top-11 left-0 right-0 flex justify-between px-16">
            {/* 1up */}
                <div className="flex flex-col gap-2">
                  <Image
                    src="/images/1up.svg"
                    alt="1UP"
                    width={60}
                    height={60}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={60}
                    height={60}
                  />
                </div>
                {/* 2up */}
                <div className="flex flex-col gap-2">
                  <Image
                    src="/images/2up.svg"
                    alt="2UP"
                    width={60}
                    height={60}
                  />
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={60}
                    height={60}
                  />
                </div>
        </div>
            <div className="z-10 absolute left-1/2 -translate-x-1/2 flex text-center items-center top-24">
              <Image
                src="/images/hiscore.svg"
                alt="HI-SCORE"
                width={150}
                height={150}
              />
            </div>
            <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col items-center text-center gap-5">
              <Image
                    src="/images/connect.svg"
                    alt="Connect"
                    width={450}
                    height={450}
              />
              <div className="w-[200px] lg:w-[300px]">
                    <Image
                          src="/images/galxe.svg"
                          alt="Galaxe"
                          width={310}
                          height={310}
                    />
                </div>
              
          </div>
          <div className="z-10 absolute top-3/4 left-1/2  -translate-x-2/3  flex flex-col items-center text-center gap-10">
                <Image
                    src="/images/1player.svg"
                    alt="star"
                    width={300}
                    height={300}
                  />
                   <Image
                    src="/images/2player.svg"
                    alt="star"
                    width={240}
                    height={240}
                    className="ml-14"
                  />
          </div>

          <div className="z-10 absolute bottom-10 ml-6">
                  <Image
                    src="/images/credits.svg"
                    alt="star"
                    width={200}
                    height={200}
                  />
          </div>

      <div className="w-full relative  aspect-[1000/600]  bg-tutorialblue">
          <Image
              src="/images/map.png"
              alt="map"
              fill
              className="object-cover opacity-50"
            />
             <div className="absolute top-[41.5%] left-[13%]">
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
          </div>

          <div className="absolute top-[54%] right-[21.2%]">
          <button 
              onClick={()=>{
              openModal({
                title: <Image
                          src="/images/zerobase.svg"
                          alt="Zerobase"
                          width={20}
                          height={20}
                        />,
                content: (
                  <>
                   <p>v0: We live in a world where every online transaction and piece of data is exposed to prying eyes, leading to identity theft, fraud, and the erosion of our most personal secrets</p>
                    <p className="mt-12">v0: Our primary objective is to overcome existing limitations and make zero-knowledge cryptography accessible to everyone. We have already built the most competitive zero-knowledge prover network across speed, cost, security, and privacy. Next, we are expanding into use cases that were previously far beyond the borders of blockchain.</p>

                  </>
                )
              })
            }}>
              <Image src="/images/mark-icon.svg" alt="icon" width={0} height={0}   
              className="w-[1.5vw] transition-transform duration-200 hover:-translate-y-1 hover:scale-110"
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
