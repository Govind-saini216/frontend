import React, { useContext, useState } from 'react';
import App_Context from '../context-api/App_Context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
export default function AddRecipe() {
const navigate = useNavigate();
    const { addrecipy } = useContext(App_Context);
    const [formData, setformData] = useState({
        title :"" , 
         inst :"" ,
         ing1 :"" ,
         ing2 :"" , 
         ing3 :"" , 
         ing4 :"" , 
         qty1 :"" , 
         qty2 :"" , 
         qty3 :"" , 
         qty4 :"" , 
       imgurl :"" ,
    })

    const OnchangeHandler = (e) =>{
       const {name , value} = e.target ; 
       setformData({...formData,[name]:value})        
    }
  
    const onsubmitHandler = async (e) =>{
        e.preventDefault();
        const { title,inst ,ing1,ing2,ing3 , ing4 ,qty1 ,qty2 ,qty3 , qty4 , imgurl } = formData ; 

        const result = await addrecipy(
            title, inst, ing1, ing2, ing3, ing4, qty1, qty2, qty3, qty4, imgurl
        )
        console.log(result);
        toast.success(result.data.message)
        setTimeout(() => {
            navigate("/");
        }, 1500);
        
    }

    return (
        <>
            <div className="mx-auto my-6 rounded-sm flex text-white min-h-full flex-col justify-center px-6 py-12 lg:px-8 md:border border-Secondry md:w-[500px] w-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 border-b border-Secondry">Add Recipe</h2>
                </div>

                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={onsubmitHandler} className="space-y-6" action="#" method="POST">

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
                            <div className="mt-2">
                                <input
                                value={formData.title}
                                onChange={OnchangeHandler} 
                                    id="Name" name="title" type="text" autoComplete="text" required className="px-3 text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Instruction</label>
                            <div className="mt-2">
                                <input 
                                    value={formData.inst}
                                    onChange={OnchangeHandler} 
                                    id="email" name="inst" type="text" autoComplete="email" required className="px-3 text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="ing1" className="block text-sm font-medium leading-6 text-gray-900">ing1</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.ing1}
                                    onChange={OnchangeHandler} 
                                    id="ing1" name="ing1" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="ing2" className="block text-sm font-medium leading-6 text-gray-900">ing2</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.ing2}
                                    onChange={OnchangeHandler} 
                                id="ing2" name="ing2" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                          
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="ing3" className="block text-sm font-medium leading-6 text-gray-900">ing3</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.ing3}
                                    onChange={OnchangeHandler} 
                                id="ing3" name="ing3" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="ing4" className="block text-sm font-medium leading-6 text-gray-900">ing4</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.ing4}
                                    onChange={OnchangeHandler} 
                                id="ing4" name="ing4" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="qty1" className="block text-sm font-medium leading-6 text-gray-900">qty1</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.qty1}
                                    onChange={OnchangeHandler} 
                                id="qty1" name="qty1" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="qty2" className="block text-sm font-medium leading-6 text-gray-900">qty2</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.qty2}
                                    onChange={OnchangeHandler} 
                                id="qty2" name="qty2" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="qty3" className="block text-sm font-medium leading-6 text-gray-900">qty3</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.qty3}
                                    onChange={OnchangeHandler} 
                                id="qty3" name="qty3" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="qty4" className="block text-sm font-medium leading-6 text-gray-900">qty4</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.qty4}
                                    onChange={OnchangeHandler} 
                                id="qty4" name="qty4" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="imgUrl" className="block text-sm font-medium leading-6 text-gray-900">Img-Url</label>
                            </div>
                            <div className="mt-2">
                                <input 
                                    value={formData.imgurl}
                                    onChange={OnchangeHandler} 
                                    id="ImgUrl" name="imgurl" type="text" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline border border-Secondry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-primry "> Add Recipe</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
