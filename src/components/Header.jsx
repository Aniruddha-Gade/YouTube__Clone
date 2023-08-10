import React, { useContext, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import ytLogoDark from '../images/yt-logo darkmode.png'
import profileImg from '../images/profile image.jpg'

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardVoice } from "react-icons/md";

import Loader from "../shared/Loader";
import { ApiContext } from '../contest/contextApi';




const Header = () => {


  const { loading, mobileMenu, setMobileMenu, searchQuery, setSearchQuery, darkMode } = useContext(ApiContext);

  const inputRef = useRef(null);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === 'Enter' || event === 'searchButton') && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);

    }
  }

  const { pagename } = useLocation();
  const pageName = pagename?.split('/').filter(Boolean)?.[0];


  return (
    <div className="sticky top-0 flex justify-between items-center z-[100] px-2 sm:px-4 md:px-5 min-h-[56px] bg-slate-100 dark:bg-[#181818] ">

      {loading && <Loader />}

      <div className="flex h-5 items-center justify-start">
        {/* for mobile phones  */}
        {
          pageName !== 'video' && (
            <div
              onClick={() => setMobileMenu(prev => !prev)}
              className="flex md:hidden cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6] "
            >
              {
                mobileMenu ? (<CgClose className="text-xl" />) : (<SlMenu className="text-xl" />)
              }
            </div>
          )}

        <Link to="/" className="flex h-5 items-center ml-2">
          {/* logo for laptop */}
          {
            darkMode && <img
              className="h-full hidden md:block "
              src={ytLogo}
              alt="Youtube Logo"
            />
          }
          {/* logo for mobile */}
          <img
            className="h-full md:hidden"
            src={ytLogoMobile}
            alt="Youtube Logo"
          />

          {/* logo for laptop - light mode  */}
          {
            !darkMode && <img
              className="h-full hidden md:block"
              src={ytLogoDark}
              alt="Youtube Logo"
            />
          }
        </Link>
      </div>

      {/* inpit filed  */}
      <div className="flex items-center gap-5 ">

        <div className="group flex items-center ">
          <div className="flex items-center h-8 md:h-10 md:ml-10 md:pl-5 border border-[#30303065] dark:border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 
              md:group-focus-within:ml-5 md:group-focus-within:pl-0 relative">

            {/* will appear after click on input  */}
            <div className="w-10 items-center justify-center hidden group-focus-within:flex outline-none">
              <IoIosSearch className="text-xl" />
            </div>

            <input
              type='text'
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
              placeholder="Search"
              ref={inputRef}
              className="bg-transparent outline-none pr-5 pl-3 md:pl-0 w-40 xs:w-52 sm:w-60 md:w-64 lg:w-[500px] group-focus-within:pl-0 md:group-focus-within:pl-0   "
            >
            </input>

            {/* If search query is typed then cross icon will be appear to remove typed search query */}
            {searchQuery.length > 0
              && <button
                onClick={() => setSearchQuery('')}
                className='absolute right-0 h-8 md:h-10 w-8 md:w-10 hidden sm:flex items-center justify-center text-2xl 
                 hover:bg-neutral-400 hover:bg-white/[0.1] rounded-full cursor-pointer p-2'>
                <CgClose />
              </button>
            }
          </div>

          <button
            onClick={() => {
              searchQueryHandler('searchButton')
              inputRef.current?.focus()
            }}
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#30303065] dark:border-[#303030] 
                rounded-r-3xl bg-white/[0.1] outline-none"
          >
            <IoIosSearch className="text-2xl " />
          </button>
        </div>

        {/* voice icon */}
        <div className='h-8 md:h-10 w-8 md:w-10 hidden xs:flex items-center justify-center text-2xl bg-neutral-300 dark:bg-[#373737]
            hover:bg-neutral-400 dark:hover:bg-neutral-600 rounded-full cursor-pointer p-2'>
          <MdKeyboardVoice className='' />
        </div>
      </div>



      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full  hover:bg-black/[0.15] dark:hover:bg-white/[0.15] cursor-pointer">
            <RiVideoAddLine className="text-xl " />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full  hover:bg-black/[0.15] dark:hover:bg-white/[0.15] cursor-pointer">
            <FiBell className="text-xl " />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer">
          <img src={profileImg} alt='Youtube Accouunt Profile' />
        </div>
      </div>

    </div>
  );
};

export default Header;