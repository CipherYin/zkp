import Image from "next/image"
import CustomScrollbar from "./component/custom-scrollbar"

  
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
        { rank: 21, address: '0x10fa...2d22', points: '130,000' },
        { rank: 220, address: '0x10fa...2d22', points: '130,000' },
      ]
    return (
        <div className="w-full">
        <div className="text-[#FC8300] text-[1.3vw] mb-4">Leaderboard</div>
      
        <div className="pl-14 pt-2 pb-6 pr-10 border-[2px] rounded-2xl border-[#DDDDDD]">
          <div className="text-[1vw] text-[#F1F1F1] font-minecraft">
            <div className="relative h-[30vw]">
              <CustomScrollbar>
                <table className="w-full table-fixed border-separate border-spacing-y-2">
                  <thead className="sticky top-0 z-10">
                    <tr className="text-center bg-tutorialblue text-[#F1F1F1] text-base font-medium">
                      <th className="w-[16.666%] py-3">Rank</th>
                      <th className="w-[50%]">Address</th>
                      <th className="w-[33.333%]">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((row, i) => (
                      <tr key={i} className=" text-black text-base text-center justify-center">
                        <td className="bg-white pb-3 pt-6 flex items-center justify-center gap-2">
                          <Image
                            src="/images/ui/verctor.svg"
                            alt="vector"
                            width={0}
                            height={0}
                            className="w-[0.4vw] -mt-2"
                          />
                          {row.rank}
                        </td>
                        <td className="truncate bg-white ">{row.address}</td>
                        <td className="bg-white ">{row.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CustomScrollbar>
            </div>
          </div>
        </div>
      </div>
      
    )
}