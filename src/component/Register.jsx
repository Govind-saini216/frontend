import React, { useContext, useState } from 'react';
import App_Context from '../context-api/App_Context';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const { register } = useContext(App_Context);
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [gmail, setgmail] = useState("");
  const [password, setpassword] = useState("");

  const registerHandler = async(e) =>{
    e.preventDefault();
    const result = await register(name,gmail,password);
    if (result.data.message == "user register successfully..."){ 
      setTimeout(() => {
        navigate('/login');
      }, 1500);
      toast.success(result.data.message);
      console.log(result.data);
    }
      else{
      return toast.success(result.data.message);

      }
    }

  return (
    <>
      <div className="mx-auto my-6 rounded-sm flex text-white min-h-full flex-col justify-center px-6 py-12 lg:px-8 md:border border-Secondry md:w-[500px] w-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 border-b border-Secondry">Register</h2>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={registerHandler} className="space-y-6" action="#" method="POST">

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input 
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                id="Name" name="Name" type="text" autoComplete="text" required className="px-3 text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              <div className="mt-2">
                <input 
                  value={gmail}
                  onChange={(e) => setgmail(e.target.value)}
                id="email" name="email" type="email" autoComplete="email" required className="px-3 text-black block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input 
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                id="password" name="password" type="password" autoComplete="current-password" required className="block w-full text-black px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline border border-Secondry focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-primry ">Sign up</button>
            </div>
          </form>
        </div>
      </div>


    </>
  )
}
