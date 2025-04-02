import { DashBoardLeaderBoard } from "@/modules/dashboard/dashboard-leaderboard";
import { DashBoardPoint } from "@/modules/dashboard/dashboard-point";



const Page = () => {
  return ( 
    <div className="w-full  bg-tutorialblue rounded-xl 2xl:rounded-3xl py-5 px-4 2xl:py-16 2xl:px-40 ">
       <DashBoardPoint/>
       <DashBoardLeaderBoard/>
    </div>
  );
}
 
export default Page;

