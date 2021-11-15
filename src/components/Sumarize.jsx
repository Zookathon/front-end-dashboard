import React from "react";

const Sumerize = (props) => {
  return <div className='flex flex-col flex-auto justify-center bg-white h-32 max-w-xs ml-8 mr-8 mt-6 mb-6 rounded-sm'>
    <span className='text-3xl'>{props.number}</span>
    <span className='text-xl font-sans font-light'>{props.title}</span> 
    </div>;
};

export default Sumerize;
