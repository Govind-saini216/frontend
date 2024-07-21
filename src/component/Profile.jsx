import React, { useContext } from 'react';
import App_Context from '../context-api/App_Context';

export default function Profile() {
  const { User } = useContext(App_Context);
  return (
    <div className='text-white text-center text-2xl mt-5' >
      <h1>Welcome To : {User?.name}</h1>
      <h2>Gmail id : {User?.gmail}</h2>
     
    </div>
  )
}
