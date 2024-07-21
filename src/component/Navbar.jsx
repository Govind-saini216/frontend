import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import App_Context from '../context-api/App_Context';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const { isAuthenticate, logout } = useContext(App_Context)
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-bg-color max-w-screen flex items-center justify-between flex-wrap p-3 space-y-1'>
                {/* Logo */}
                <div className='mx-auto md:mx-10'>
                    <Link to='/' className= 'cursor-pointer text-white text-2xl font-semibold'>Mern</Link>
                </div>
                {/* Buttons */}
                <div className='flex items-center justify-center flex-wrap gap-x-2 gap-y-2 ease-in-out'>
                    {isAuthenticate ?
                    <>
                            <div className="padding bg-Tertiary active:scale-95 " >
                                <Link to='/addrecipe'>Add Recipe</Link>
                            </div>
                            <div className="padding bg-primry1 active:scale-95 " >
                                <Link to='/add'>Add</Link>
                            </div>
                            <div className="padding bg-Secondry2 active:scale-95 " >
                                <Link to='/' onClick={() => logout()}>Logout</Link>
                            </div>
                            <div className="padding bg-Tertiary3 active:scale-95 " >
                                <Link to='/profile'>Profile</Link>
                            </div>
                    </>
                    :
                    <>
                            <div className="padding bg-primry active:scale-95">
                                <Link to='/login'>Login</Link>
                            </div>
                            <div className="padding bg-Secondry active:scale-95 " >
                                <Link to='/register'>Register</Link>
                            </div>
                    </>
                    }
                
                   
                    <div className="padding bg-Tertiary3 active:scale-95 " >
                        <Link to='/saved'>Saved</Link>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
