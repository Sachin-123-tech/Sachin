import { useMemo, useState } from "react";

function App() {
  const [count,setCount]=useState(0);
const [inp,setInp]=useState('')
  function exp(num)
  {
    console.log("EXpensive task ")
    for(let i=0;i<100000000;i++){}
    return num*2
  }
  let double= useMemo(()=>exp(inp),[inp])

 
  return ( 
    <>
      <button onClick={()=>setCount(count+1)} >Click</button>
      <p>{count}</p>
      <input type="number"  placeholder="Enter number"  value={inp} onChange={(e)=>setInp(e.target.value)}  />

      {double}
    </>
  );
}

export default App;
