import GalaxeItem from './components/galaxeItem';
import HashKeyItem from './components/hashkey-item';
import StakeItem from './components/stake-item';
import UploadItem from './components/upload-item';

const QuestsItem = () => {
  return (
    <>
     <div className='flex flex-col gap-7'>
        <UploadItem/>
        <StakeItem/>
        <HashKeyItem/>
        <GalaxeItem/>
      </div>
       
    </>
    
  );
};

export default QuestsItem;
