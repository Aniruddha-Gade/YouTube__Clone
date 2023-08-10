
import React, { useContext } from "react";
import { ApiContext } from '../contest/contextApi';

const LeftNavMenuItem = ({ text, icon, action, className }) => {

  const { setMobileMenu, setSearchQuery } = useContext(ApiContext);


  return (
    <div
      onClick={() => {
        action();
        setMobileMenu(prev => false);
        setSearchQuery((prev) => '')
      }}

      className={` text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-black/[0.15] dark:hover:bg-white/[0.15] ` + className}>
      <span className='text-xl mr-5 '>{icon}</span>
      <p>{text}</p>

    </div>
  )
}

export default LeftNavMenuItem