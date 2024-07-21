import React, { useContext } from 'react';
import App_Context from '../context-api/App_Context';
import { Link } from 'react-router-dom';


export default function Saved() {
  const { savedrecipyy } = useContext(App_Context);
  // console.log("this is saved recipy", savedrecipyy)
  return (
    <div className='text-white flex flex-wrap items-center justify-evenly gap-x-1'>
        {
          savedrecipyy.map((recipy) => (
            <div key={recipy._id} className='grid justify-evenly text-center items-center mx-auto w-[300px] h-full py-10' >
            <div>
                <img className='w-56 h-56 rounded-md border-2 border-Secondry' src={recipy.imgurl} />
                <h1 className='font-bold text-xl mt-2' >{recipy.title}</h1>
            </div>
            
            </div>
          ))
        }
      
      <div className='py-4 flex items-center justify-center w-full'>
        <Link to="/" className="w-72 rounded-md px-5 py-2.5 text-center text-md font-semibold bg-Secondry focus:outline-none focus:ring-4 focus:ring-blue-300">
          Back To Home </Link>
      </div>
    </div>
  )
}
