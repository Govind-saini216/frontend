import React, { useContext } from 'react';
import App_Context from '../context-api/App_Context.jsx';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function Home() {
  const navigate = useNavigate();
  const { recipy, savedrecipybyid } = useContext(App_Context);

  const saved = async (id) =>{
    try {
      const result = await savedrecipybyid(id);
      toast.success(result.data.message); 
      console.log(result);
    } catch (error) {
      console.log("saved recipy id ",error);
    }
 
  }

  return (
    <>
    <div className=' flex items-center justify-center flex-wrap gap-x-8'>
        {recipy.map((recipy)=>(
          <div key={recipy._id} className=''>
            <div className="group bg-cover bg-center my-10 flex w-full h-[400px] max-w-xs flex-col  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <a className="relative mx-3 mt-3 flex h-52 overflow-hidden rounded-xl" href="#">
                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={recipy.imgurl} alt="product image" />
            
                <div className="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
                  <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                  <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                  <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                </div> 
                <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                {/* <!-- <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span> --> */}
              </a>
              <div className="mt-4 px-5 pb-5">
                <a href="#">
                  <h5 className="text-lg tracking-tight font-extrabold text-slate-900">{recipy.title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    {/* <span className="text-2xl font-semibold text-slate-900 overflow-hidden">{recipy.inst}</span><br/> */}
                    <span className="text-base font-medium text-slate-900">{recipy.ing1}</span><br/>
                    <span className="text-lg font-semibold text-slate-900">{recipy.qty1} pcs</span><br/>
                  </p>
                </div>
                <div className='flex items-center justify-center gap-x-20 '>
                  <button onClick={()=>saved(recipy._id)} className="w-full rounded-md px-5 py-2.5 text-center text-md font-semibold bg-Tertiary focus:outline-none focus:ring-4 focus:ring-blue-300">
                  Save </button>
                  
                  <button onClick={() => navigate(`/${recipy._id}`)} className="w-full rounded-md px-5 py-2.5 text-center text-md font-semibold bg-Secondry focus:outline-none focus:ring-4 focus:ring-blue-300">
                  View </button>
                  
                </div>
              </div>
            </div>

          </div>
        ))
         }
    </div>
    </>
  )
}
