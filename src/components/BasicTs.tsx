import { useState } from "react"
type InfoType={
    name:string,
    age:number,
    classes:string
}
function BasicTs() {
  const [count,setCount]=useState<number>(0)
  const [info,setInfo]=useState<InfoType[]>([{
    name:"Ram",
    age:20,
    classes:"Bachelor"
  }])
  const handleCount=()=>{
    setCount((prev)=>prev+1)
  }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleCount}>
        +
        </button>
         <div>
            {
                info.map((item,index)=>
                <div key={index}>
                 <p>
                    {item.name}
                 </p>
                 <p>
                    {item.age}
                 </p>
                 <p>
                    {item.classes}
                 </p>
                </div>
                )
            }
         </div>
    </div>
  )
}

export default BasicTs