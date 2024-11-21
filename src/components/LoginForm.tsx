import React from 'react'

interface LoginProps {
  onLogin: (username: string, email: string, password: string) => null
}

function LoginForm() {
  return (
    <div className=' text-white flex flex-col justify-center items-center '>
        
        <div className=' w-max px-4 py-4 bg-indigo-950/30 '>
       <p className='text-white '>Get Started</p>

<form className='flex flex-col px-10 py-10'>

<input id="userName" type="text" name="userName" placeholder="Username" className='text-black bg-transparent border-solid border border-gray-700 mb-4 py-1 px-2' />
<input id="email" type="text" name="email" placeholder="Email " className='text-black bg-transparent border-solid border border-gray-700  mb-4 py-1 px-2' />
<input id="password" type="password" name="password" placeholder="Password " className='text-black border-gray-700 bg-transparent border-solid border  py-1 px-2' />


</form>
       <button className='bg-orange-500 py-3 px-[60px] hover:bg-orange-300 rounded-md  mt-5 '>Join Now!</button>
       
        </div>
        
        </div>
  )
}

export default LoginForm    