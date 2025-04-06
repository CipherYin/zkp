import Image from "next/image"

  
export const DashBoardLeaderBoard = () => {
    const leaderboardData = [
        { rank: 1, address: '0x10fa...2d22', points: '150,000' },
        { rank: 20, address: '0x10fa...2d22', points: '140,000' },
        { rank: 4, address: '0x10fa...2d22', points: '13000000,000' },
        { rank: 5, address: '0x10fa...2d22', points: '130,000' },
        { rank: 6, address: '0x10fa...2d22', points: '130,000' },
        { rank: 7, address: '0x10fa...2d22', points: '130,000' },
        { rank: 8, address: '0x10fa...2d22', points: '130,000' },
        { rank: 9, address: '0x10fa...2d22', points: '130,000' },

        { rank: 10, address: '0x10fa...2d22', points: '130,000' },
        { rank: 12, address: '0x10fa...2d22', points: '130,000' },
        { rank: 13, address: '0x10fa...2d22', points: '130,000' },
        { rank: 14, address: '0x10fa...2d22', points: '130,000' },
        { rank: 15, address: '0x10fa...2d22', points: '130,000' },
        { rank: 16, address: '0x10fa...2d22', points: '13000,000' }, 
        { rank: 17, address: '0x10fa...2d22', points: '130,000' },
        { rank: 18, address: '0x10fa...2d22', points: '130,000' },
        { rank: 19, address: '0x10fa...2d22', points: '130,000' },
        { rank: 20, address: '0x10fa...2d22', points: '130,000' },
        { rank: 21, address: '0x10Ra...2d22', points: '130,000' },
        { rank: 220, address: '0x10fa...2d22', points: '130,000' },
      ]
    return (
        <div className="w-full">
        <div className="text-[#FC8300] text-[3.8vw] ml-2 my-1 lg:text-[1.3vw] lg:mb-4">Leaderboard</div>
      
        <div className="pl-6 lg:pl-14 pb-4 pr-5 pt-4 border-[2px] rounded-lg border-[#DDDDDD]">
            <div className="overflow-y-scroll max-h-[88vw] lg:max-h-[38vw] lg:pr-5">
              <div className="text-[1vw] text-[#F1F1F1]">
                <div className="relative">
                  <div className="grid grid-cols-[16.666%,50%,33.333%] sticky w-[101%] lg:w-full top-0 text-[2.5vw] lg:text-base bg-tutorialblue text-[#F1F1F1] z-50">
                    <div className="text-center py-1 font-medium">Rank</div>
                    <div className="text-center py-1 font-medium">Address</div>
                    <div className="text-center py-1 font-medium">Points</div>
                  </div>
                  <div className="grid gap-y-2 w-full">
                    {leaderboardData.map((row, i) => (
                      <div key={i} className="grid grid-cols-[16.666%,50%,33.333%] pt-2 py-1 lg:pt-6 bg-white lg:rounded-xl rounded-lg text-black text-center text-[2vw] lg:text-base justify-center lg:py-3">
                        <div className="flex items-center justify-center gap-1">
                          <Image
                            src="/images/ui/verctor.svg"
                            alt="vector"
                            width={0}
                            height={0}
                            className="w-[0.7vw] lg:w-[0.4vw] -mt-[1.6vw] lg:-mt-2"
                          />
                          {row.rank}
                        </div>
                        <div>{row.address}</div>
                        <div>{row.points}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
</div>


        {/* <div className="pl-14 pb-4 pr-5 pt-4 border-[2px] rounded-lg border-[#DDDDDD] ">
          <div className="overflow-y-scroll pr-5">
            <div className="text-[1vw] text-[#F1F1F1]">
              <div className="relative h-[38vw]">
                  <table className="w-full table-fixed border-separate border-spacing-y-2 border-spacing-x-0">
                    <thead className="sticky top-0 z-10">
                      <tr className="text-center bg-tutorialblue  text-[#F1F1F1] text-base font-medium">
                        <th className="w-[16.666%] border-none">Rank</th>
                        <th className="w-[50%] border-none">Address</th>
                        <th className="w-[33.333%] border-none">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((row, i) => (
                        <tr key={i} className=" text-black text-base text-center justify-center">
                          <td className="border-none bg-white pb-3 pt-6 flex items-center justify-center gap-2">
                            <Image
                              src="/images/ui/verctor.svg"
                              alt="vector"
                              width={0}
                              height={0}
                              className="w-[0.4vw] -mt-2"
                            />
                            {row.rank}
                          </td>
                          <td className="border-none pb-3 pt-6 truncate bg-white ">{row.address}</td>
                          <td className="border-none pb-3 pt-6 bg-white ">{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
         
        </div> */}
      </div>
      
    )
}