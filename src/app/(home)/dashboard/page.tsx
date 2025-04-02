import { DashBoardLeaderBoard } from "@/modules/dashboard/dashboard-leaderboard";
import { DashBoardPoint } from "@/modules/dashboard/dashboard-point";



const Page = () => {
  return ( 
    <div className="w-full  bg-tutorialblue rounded-3xl py-16 px-40">
       <DashBoardPoint/>
       <DashBoardLeaderBoard/>
    </div>
  );
}
 
export default Page;

