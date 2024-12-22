import { useState } from "react"

export function Propdrilling() {
  const [data, setData] = useState("React Js ❤️")
  /*
    In this example, we have a parent component that has a state variable called data.And, we want used that in the grandgrandchild component. To acheive that we want to share the state to each of the components up to that grandgrandchild. 
    This is called prop drilling.
    Now, but that data is not used by any parents so they have to be render or pass that data so it is somewhat ensufficient/ not efficient. 

    To solve this problem we can use context API or Redux.
    
   

  */

  return (
    <div className='min-h-screen w-full bg-[#2a2a2a] text-white flex justify-center items-center'>

      <div className="parent">
        Hey there , I am parent !
        <Child data={data} />
      </div>
      
    </div>
  )
}

const Child = ({data}) => {
  return (
    <div className="child">
      Hey there , I am child !
      <GrandChild data={data} />
    </div>
  )
}

const GrandChild = ({data}) => {
  return (
    <div className="grandchild">
      Hey there , I am grandchild !
      <h1>I Love {data}</h1>
    </div>
  )
}