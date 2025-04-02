import QuestsItem from "@/modules/quests/quests-item";



const Page = () => {
    const leaderboardData = [
      {
        title: 'Staking',
        description: 'USDT · USDC',
        buttonText: 'Stake USDT/USDC',
        imageUrl: '/images/quests/image.svg',
      },
      {
        title: 'general integral',
        description: 'Contents · eiwueruiowuer',
        buttonText: 'Start',
        imageUrl: '/images/quests/image.svg',
      },
      {
        title: 'Partner points',
        description: 'Contents · eiwueruiowuer',
        buttonText: 'Start',
        imageUrl: '/images/quests/image.svg',
      },
      {
        title: 'Social media interaction',
        description: 'Contents · eiwueruiowuer',
        buttonText: 'Start',
        imageUrl: '/images/quests/image.svg',
      },
      {
        title: 'Entropy sources contribute tasks',
        description: 'Contents · eiwueruiowuer',
        buttonText: 'Start',
        imageUrl: '/images/quests/image.svg',
      },
      {
        title: 'invite friends',
        description: 'Contents · eiwueruiowuer',
        buttonText: 'Start',
        imageUrl: '/images/quests/image.svg',
      },
      {
        title: 'Interactive mini-game',
        description: 'Contents · eiwueruiowuer',
        buttonText: 'Start',
        imageUrl: '/images/quests/image.svg',
      },
    ];
  
    return ( 
      <div className="w-full  bg-tutorialblue rounded-3xl py-5 px-4 2xl:py-16 2xl:px-40">
          <div className="space-y-10">
            {leaderboardData.map((data, index) => (
              <QuestsItem
                key={index}
                title={data.title}
                description={data.description}
                buttonText={data.buttonText}
                imageUrl={data.imageUrl}
              />
            ))}
      </div>
      </div>
    );
  }
   
  export default Page;
  
  