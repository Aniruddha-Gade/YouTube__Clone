import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import LeftNavMenuItem from './LeftNavMenuItem'
import { ApiContext } from '../contest/contextApi'
import { categories } from './../utils/constants';

import { MdOutlineLightMode } from 'react-icons/md'
import { MdOutlineDarkMode } from 'react-icons/md'
import { BsFillCheckCircleFill } from "react-icons/bs";



const LeftNav = () => {

  const { selectedCategory, setSelectedCategory, darkMode, setDarkMode, mobileMenu, setMobileMenu } = useContext(ApiContext);


  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return setSelectedCategory(name);
      case 'home':
        return setSelectedCategory(name);
      case 'menu':
        return false;
      default:
        break;
    }
  }




  return (
    <div className={`absolute md:block w-[240px] overflow-y-auto py-4 h-full md:relative z-10 translate-x-[-240px]  
        md:translate-x-0 transition-all bg-white dark:bg-[#202020] ${mobileMenu ? 'translate-x-[0px]' : ''}`}>
      <div className="flex flex-col pl-4 px-2">
        {
          categories.map((item) => (
            <React.Fragment key={item?.name} >
              <LeftNavMenuItem
                text={item?.type === 'home' ? 'Home' : item?.name}
                icon={item?.icon}
                action={() => {
                  clickHandler(item?.name, item?.type);
                  navigate('/');
                }}
                className={`${selectedCategory === item?.name ? 'bg-black/[0.15] dark:bg-white/[0.15]' : ''}`}
              />

              {item?.divider && (
                <hr className='my-5 border-white/[0.2] ' />
              )}
            </React.Fragment>
          ))}


        {/* light - dark mode */}
        <div
          onClick={() => {
            setDarkMode(prevMode => !prevMode);
            setMobileMenu(prev => false);
          }}
          className='flex items-center gap-5 cursor-pointer py-[7.5px] pl-3 hover:bg-black/[0.15] dark:hover:bg-[#373737] rounded-xl group'
        >
          <span className='group-hover:animate-bounce'>
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </span>

          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </div>

        <hr className='my-5 border-white/[0.2] ' />

        <Link to='https://github.com/Aniruddha-Gade' target='__blank' >
          <div className='dark:text-white/[0.5] text-[12px] flex items-center underline'>
            <p>Clone by : Aniruddha Gade </p>
            <BsFillCheckCircleFill className="text-white/[0.5] text-[9px] ml-1" />
          </div>
        </Link>


      </div>
    </div>
  )
}

export default LeftNav;