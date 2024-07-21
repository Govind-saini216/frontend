import React, { useEffect, useState } from 'react';
import App_Context from '../context-api/App_Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Fetchrecipybyid({ id }) {
    const { getrecipybyid } = useContext(App_Context);
    const [recipy, setrecipy] = useState("");
    
    useEffect(() => {
        const fetchrecipy = async (id) => {
            const result = await getrecipybyid(id);
            setrecipy(result.data.recipy)
            //   console.log("this is fetch recipy data result",result.data.recipy)
        }
        fetchrecipy(id)
    }, [id])

    return (
        <>
            <div className='text-white w-full h-full flex flex-col items-center py-10 justify-evenly' >
                <div className='text-center'>
                    <img className='w-56 h-56 rounded-md border-2 border-Secondry' src={recipy.imgurl} />
                    <h1 className='font-bold text-xl mt-2' >{recipy.title}</h1>
                </div>
                
                <div className='w-full flex flex-wrap  mt-4 justify-center gap-x-2 px-2'>
                <div className='w-[200px] text-justify'>
                <div>
                   <span>{recipy.ing1}</span> : <span>{recipy.qty1} </span><br/>
                </div>
                <div>
                   <span>{recipy.ing2}</span> : <span>{recipy.qty2} </span><br/>
                </div>
                <div>
                   <span>{recipy.ing3}</span> : <span>{recipy.qty3}</span><br/>
                </div>
                <div>
                   <span>{recipy.ing4}</span> : <span>{recipy.qty4} </span>
                </div>

                </div>
                <div className='w-[500px] h-[300px] overflow-hidden text-justify' >
                    <p>{recipy.inst}</p>
                </div>
                </div>
            </div>

            {/* back to home button */}
            <div className='py-4 flex items-center justify-center w-full'>
                <Link to="/" className="w-72 rounded-md px-5 py-2.5 text-center text-md font-semibold bg-Secondry focus:outline-none focus:ring-4 focus:ring-blue-300">
                    Back To Home </Link>
            </div> 
        </>
    )
}
