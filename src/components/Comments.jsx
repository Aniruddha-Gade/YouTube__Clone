import React from 'react'
import { MdOutlineSort } from 'react-icons/md'


import Comment from './Comment'

const Comments = () => {
    return (
        <div className='mt-5 '>

            <div className='flex items-center gap-10 font-semibold '>
                <p>1,296 Comments</p>
                <p className='flex items-center gap-2 cursor-pointer'>
                    <MdOutlineSort /> Sort by
                </p>
            </div>

            <div className='flex items-center gap-[10px] my-5'>
                <img
                    src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" alt='Youtube Accouunt Profile'
                    className='rounded-full w-9 h-9 cursor-pointer' />
                <input placeholder='Add a comment...' className='w-full p-[5px] bg-transparent outline-none border-b-2 border-[#f5f5f5] dark:border-[#373737] ' />
            </div>


            <Comment comment={'मनःपूर्वक आभार लेखक आणि दिग्दर्शक  लांजेकर यांचे..मराठ्यांच्या शुर गाथा आणि आपले महाराष्ट्राचे आराध्य दैवत श्री छत्रपती शिवाजी महाराज यांच्या इतिहासच तेज या देशासमोर आणण्यासाठी 🧡🚩'} />
            <Comment comment={'🙏🏻🚩पुण्यश्लोक छत्रपती श्री शिवाजी महाराज की जय 🚩🙏🏻धर्मवीर छत्रपती श्री संभाजी महाराज की जय🚩🙏🏻'} />
            <Comment comment={'Truly goosebumps music from 3:22 🎧😌🧡🚩🔥 hats off to digpal sir🙌🏻'} />
            <Comment comment={'Very unique song,  I never heard this type of lyrics, music before in Marathi industry, Jay Shivray Jay Maharashtra 🧡🚩'} />
            <Comment comment={'दिगपाल सर तुमचा सारखे  उत्कृष्ट दिकदर्षक आता आता पर्यंत पाहिले नाही खरंच तुमचा मुळे इतिहास पूनर जागरूक होत आहे ...🚩'} />

        </div>
    )
}

export default Comments