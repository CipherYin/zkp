import { DashBoardLeaderBoard } from "@/modules/dashboard/dashboard-leaderboard";
import { DashBoardPoint } from "@/modules/dashboard/dashboard-point";



const Page = () => {
  return ( 
    <div className="w-full  bg-tutorialblue rounded-xl lg:py-12 lg:px-16 lg:rounded-3xl py-5 px-4 ">
       <DashBoardPoint/>
       <DashBoardLeaderBoard/>
    </div>
  );
}
 
export default Page;

