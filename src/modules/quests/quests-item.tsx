import Image from 'next/image';

type CardItemProps = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
};

const QuestsItem = ({ title, description, buttonText, imageUrl }: CardItemProps) => {
  return (
    <div className='flex bg-[#D9D9D9] rounded-xl'>
       <div className="flex bg-[#FFFBF7] rounded-xl py-8 pl-12 shadow-lg gap-14 w-1/2">
            <div>
                <Image src={imageUrl} alt="icon" width={0} height={0}  className='w-[14vw] 2xl:w-[8vw]'/>
            </div>

            <div className="flex-1">
                <h3 className="font-medium text-lg 2xl:text-lg pt-3">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 mt-2">{description}</p>
                <button className="bg-[#737EF8] hover:bg-blue-500 text-[#FFFBF7] 2xl:pb-2 2xl:pt-4 2xl:px-10 rounded-xl 2xl:mt-24 items-center">{buttonText}</button>
            </div>
        </div>
        <div className='flex-1'>
            右边内容    
        </div>  
    </div>
    
  );
};

export default QuestsItem;
