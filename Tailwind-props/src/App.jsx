import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
<div className='h-[100vh] w-full bg-slate-900 pt-3 px-3 flex justify-between'>
<Card    />

<Card title = "Dinesh" btn = "Amaze me!" subHeading='Chandani'/>

<Card title = "Sagar" btn = "Excite me!" subHeading='Elvish bhai !!!!!'/>




</div>
    </>
  )
}

export default App
