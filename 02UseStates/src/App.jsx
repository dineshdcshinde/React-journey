import React, { useState } from 'react'

function App() {
const [time, settime] = useState(new Date().toLocaleTimeString());

setInterval(() => {
  settime(new Date().toLocaleTimeString());
}, 1000);

  return (
    <div>
      
      <p>{time}</p>
    </div>
  )
}

export default App