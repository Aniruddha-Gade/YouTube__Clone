import React, { useContext, useEffect } from 'react'
import LeftNav from './LeftNav'

import { ApiContext } from '../contest/contextApi'
import VideoCard from './VideoCard';


const Feed = () => {

  const { loading, searchResults } = useContext(ApiContext);

  useEffect(() => {
    document.getElementById('root').classList?.remove('custom-h');
  }, [])


  return (
    <section className='flex h-[calc(100vh-56px)]'>
      <LeftNav />

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-neutral-200 dark:bg-[#181818] ">

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 ">
          {
            !loading && 
            searchResults &&
            searchResults?.map((item) => {
              if (item?.type !== 'video') return false;

              return (
                <VideoCard
                  key={item?.video?.videoId}
                  video={item?.video} />
              )
            })}
        </div>
      </div>

    </section>
  )
}

export default Feed