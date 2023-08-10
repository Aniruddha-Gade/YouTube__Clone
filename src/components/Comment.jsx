import React from 'react'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { BiDislike } from 'react-icons/bi'

import profileImage from '../images/profile image.jpg'

const channelName = 'Everest Marathi';

const Comment = ({ comment }) => {

    return (
        <div className='flex gap-3 my-4'>
            <img
                src={profileImage} alt='Youtube Accouunt Profile'
                className='rounded-full w-9 h-9 cursor-pointer' />
            <div>
                <div className='flex items-center gap-2 text-sm mb-1'>
                    <p className='flex mt-[4px] items-center gap-1 font-medium cursor-pointer '>
                        {channelName}  <BsFillCheckCircleFill style={{ fontSize: '0.9rem' }} />
                    </p>
                    <p className='text-[#606060] dark:text-[#aaaaaa] text-xs'>1 day ago</p>
                </div>

                <p className='text-sm dark:text-slate-200'>
                    {comment}
                </p>


                <div className='flex items-center '>
                    <button className='flex cursor-pointer items-center p-2 rounded-full hover:bg-[#272727]'>
                        <AiOutlineLike style={{ fontSize: '1.3rem' }} />
                    </button>
                    <div className='h-[60%] w-[1px] bg-slate-600'></div>
                    <button className='flex cursor-pointer items-center p-2 rounded-full hover:bg-[#272727]'>
                        <BiDislike style={{ fontSize: '1.3rem' }} />
                    </button>

                    <p className='text-xs ml-4 cursor-pointer'>Reply</p>
                </div>
            </div>

        </div>
    )
}

export default Comment