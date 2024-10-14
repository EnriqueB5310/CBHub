import React from 'react'
import NavBar from '../components/NavBar'
import LoginForm from '../components/LoginForm'

function Home() {
  return (
    <div>
    <NavBar /> 
<div className='flex flex-col text-center justify-center'>

<h1 className='text-white text-3xl font-bold mt-[6rem] mb-[1rem]'>Comic Book Hub</h1>
<p className='text-indigo-400 font-bold mb-[7rem]'>Discover and track comics that are releasing and manage your favorites.</p>


<LoginForm />


</div>
</div>
  )
}

export default Home