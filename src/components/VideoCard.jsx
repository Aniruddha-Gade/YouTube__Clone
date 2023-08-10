import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

import VideoLength from "../shared/VideoLength";


const VideoCard = ({ video }) => {

  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col mb-8">
        <div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden ">
          {/* image of video  */}
          <img
            className="h-full w-full object-cover"
            src={video?.thumbnails?.[0]?.url} alt={video?.thumbnails?.[0]?.url}
          />

          {/* time showing text  */}
          {video?.lengthSeconds && (
            <VideoLength time={video?.lengthSeconds} />)
          }
        </div>

        {/* below details of video  */}
        <div className="flex  dark:text-white mt-3">
          <div className="flex ">
            <div className="flex h-9 w-9 rounded-full overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={video?.author?.avatar[0]?.url}
                alt='video author avatar'
              />
            </div>
          </div>

          <div className="flex flex-col ml-3 overflow-hidden">
            {/* title of video  */}
            <span className="text-sm font-bold line-clamp-2 dark:text-white">{video?.title}</span>
            {/* channel name  */}
            <span className="text-[12px] font-bold mt-2 dark:text-white/[0.7] flex items-center ">
              {video?.author?.title}

              {video?.author?.badges[0]?.type === 'VERIFIED CHANNEL'
                && (
                  <BsFillCheckCircleFill className="dark:text-white/[0.5] text-[12px] ml-1 " />
                )}
            </span>

            <div className="flex text-[12px] font-bold dark:text-white/[0.7] truncate overflow-hidden ">
              <span>
                {`${abbreviateNumber(video?.stats?.views, 2)}`}
              </span>
              <span className="flex text-[24px] leading-none font-bold  relative top-[-10px] mx-1 ">
                .
              </span>
              <span className="truncate">
                {video?.publishedTimeText}
              </span>
            </div>
          </div>

        </div>
      </div>

    </Link>
  )
}

export default VideoCard