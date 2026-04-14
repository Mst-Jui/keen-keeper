import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const TimeLinePage = () => {
  return (
    <div className='container mx-auto max-w-5xl space-y-4 my-8'>
      {/* timeline  */}
      <h2 className='font-bold text-5xl text-gray-700'>Timeline </h2>
      {/* dropdown  */}
      <details className="dropdown">
        <summary className="btn m-1 text-[18px] text-gray-400">Filter timeline <IoIosArrowDown /></summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li><a>Text</a></li>
          <li><a>Call</a></li>
          <li><a>Video</a></li>
        </ul>
      </details>
      {/* dynamic card  */}
    </div>
  );
};

export default TimeLinePage;