import React from 'react'

interface LoginProps {
  onLogin: (username: string, email: string, password: string) => null
}

function LoginForm() {
  return (
    <div className='  text-white flex flex-col justify-center items-center '>
        
        <div className=' w-max px-4 py-4 bg-indigo-900 '>
       <p className='text-white '>Get Started</p>



       <button className='bg-orange-500 rounded-md px-2 mt-5 py-1'>Join Now!</button>
       
        </div>
        
        </div>
  )
}

export default LoginForm    