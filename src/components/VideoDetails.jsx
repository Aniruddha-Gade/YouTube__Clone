import React, { useContext, useEffect, useState } from 'react'

import { ApiContext } from '../contest/contextApi'
import { fetchDataFromApi } from './../utils/Api';
import { useParams } from 'react-router-dom';

import SuggestionVideoCard from './SuggestionVideoCard';
import Comments from '../components/Comments';

import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from 'react-icons/bi'
import { PiShareFatThin } from 'react-icons/pi'

import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from "react-player/youtube";


const VideoDetails = () => {

  const { setLoading } = useContext(ApiContext);
  const [video, setVideo] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();



  useEffect(() => {

    const fetchVideoDetails = () => {
      setLoading(true);
      fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
        console.log(res);
        setVideo(res);
        setLoading(false);
      });
    };

    const fetchRelatedVideos = () => {
      setLoading(true);
      fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
        console.log(res);
        setRelatedVideos(res);
        setLoading(false);
      });
    };


    document.getElementById("root").classList.add("custom-h");
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id, setLoading]);




  return (


    // h-[calc(100%-56px)]

    <section className="flex justify-center bg-slate-100 dark:bg-[#181818] text-black dark:text-white">
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row ">

        {/* left part  */}
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
          {/* Youtube Video  */}
          <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[450px] 2xl:h-[550px]  lg:ml-0  lg:mr-0">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>

          {/* title of the video  */}
          <div className=" font-bold text-sm md:text-xl mt-4 ">{video?.title}</div>

          {/*channel details --> channel profile photo - buttons */}
          <div className="flex justify-between flex-col md:flex-row mt-4 ">
            <div className="flex gap-3 items-center justify-between md:justify-start w-full">
              <div className='flex gap-2'>
                <div className="flex items-start h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover cursor-pointer"
                    src={video?.author?.avatar[0]?.url} alt='youtube channel avatar'
                  />
                </div>

                {/* channel name and verified Tick  */}
                <div className="flex flex-col ">
                  <div className=" text-md font-semibold flex items-center">
                    <p className='cursor-pointer'>{video?.author?.title}</p>
                    {video?.author?.badges[0]?.type ===
                      "VERIFIED_CHANNEL" && (
                        <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                      )}
                  </div>
                  <div className="text-white/[0.7] text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
              </div>

              <button className='flex gap-[10px] cursor-pointer items-center py-2 px-6 rounded-full text-white dark:text-black
                    dark:bg-white bg-black hover:bg-neutral-800 dark:hover:bg-neutral-300 font-semibold'>
                Suscribe
              </button>
            </div>



            {/* like and dislike buttons */}
            <div className='mt-4 md:mt-0 flex gap-2 text-sm font-semibold'>

              <div className='flex items-center rounded-full bg-neutral-300 dark:bg-[#272727] '>
                <button className='flex h-full gap-[10px] items-center py-2 px-4 rounded-l-full hover:bg-neutral-400 dark:hover:bg-zinc-700'>
                  <AiOutlineLike className='text-xl' /> {`${abbreviateNumber(video?.stats?.views, 2)} `}
                </button>
                <div className='h-[60%] w-[1px] bg-slate-600'></div>
                <button className='flex h-full items-center py-2 px-4 rounded-r-full hover:bg-neutral-400  dark:hover:bg-zinc-700'>
                  <BiDislike className='text-xl' />
                </button>
              </div>

              <button className='flex justify-between items-center bg-neutral-300 dark:bg-[#272727] rounded-full w-24 py-2 px-4 hover:bg-neutral-400 dark:hover:bg-zinc-700'>
                <PiShareFatThin className='text-xl' />
                <p className=''>Share</p>
              </button>
              <button className='flex gap-[5px] items-center justify-center p-3 bg-neutral-300 dark:bg-[#272727] rounded-full w-10 h-10 hover:bg-neutral-400 dark:hover:bg-zinc-700'>
                <div className='font-black  '>...</div>
              </button>
            </div>

          </div>


          {/* description part - below part   */}
          <div className='w-full bg-neutral-200 dark:bg-[#272727] rounded-xl mt-4 p-3 text-sm font-normal '>
            <p className='flex items-center font-semibold ' >
              {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
            </p>

            <div className='flex flex-col gap-5 mt-2'>
              <p>आई भवानीच्या चरणी अर्पण करत आहोत श्री शिवराज अष्टकातील पाचवे  चित्रपुष्प 'सुभेदार' !
                २५ ऑगस्ट ला गाजणार सिंहगडाचा पोवाडा..</p>


              <p>Presenting Official Teaser of upcoming Marathi Movie SUBHEDAR (सुभेदार) releasing on 25th August 2023
                #SubhedarTeaser Out Now
                #Subhedar #सुभेदार #Subhedar25August</p>

              <p>Written & Directed By - Digpal Lanjekar
                Presented By - AA Films & Everest Entertainment
                Production Houses - Raajwarasa Productions | Mulakshar Productions | Pruthviraj Productions | Rajau Productions | Parampara Productions </p>

              <p>Produced By - Pradyot Prashant Pendharkar | Anil Warkhade | Digpal Lanjekar | Chinmay Mandlekar | Shramik Chandrashekhar Gojamgunde | Vinod Nishid Jawalkar | Shivbhakt Aniket | Nishid Jawalkar | Shruti Daund
              </p>

              <p>Mrinal Kulkarni | Chinmay Mandalekar | Ajay Purkar</p>

              <p>Subscribe to this channel and stay tuned:</p>


              <p className='flex flex-col '>Follow Us On Instagram: <span className='text-[#3ea5fd] cursor-pointer'>https://www.instagram.com/rajshrimarathi</span></p>

              <p className='flex flex-col '>Regular Facebook Updates: <span className='text-[#3ea5fd] cursor-pointer'>http://www.facebook.com/rajshrimarathi</span></p>

              <p className='flex flex-col '>Join Us On Twitter: <span className='text-[#3ea5fd] cursor-pointer'>https://twitter.com/RajshriMarathi</span></p>
            </div>
          </div>



          {/* comments part */}
          <Comments />
        </div>




        {/*right part -->  Recomendations / suggestion videos */}
        <div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
          {relatedVideos?.contents?.map((item, index) => {

            if (item?.type !== "video") return false;
            return (
              <SuggestionVideoCard
                key={index}
                video={item?.video}
              />
            );
          })}
        </div>
      </div>
    </section >

  )
}

export default VideoDetails