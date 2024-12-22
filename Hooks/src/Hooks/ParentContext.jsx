import React, { useContext } from 'react'
import { DataContext } from '../context/Data'

export function ParentContext() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-[#2a2a2a] text-white'>
      <h1>I am Parent Component</h1>
      <NextParent />
    </div>
  )
}


function NextParent() {
  return (
    <div className='bg-[#333] p-5'>
      <h1>I am Next Parent Component</h1>

    <Child/>
    </div>
  )
}

function Child (){
    return (
      <div className='bg-[#555] p-5'>
        <h1>I am Child Component</h1>
        <GrandGrandChild />
      </div>
    )
  
}


function GrandGrandChild (){
    const {data, setData} =useContext(DataContext);

    return (
      <div className='bg-[#777] p-5 mt-3'>
        <h1>I am Grand Grand Child Component</h1>
        <p>I love {data}</p>
      </div>
    )
  
}