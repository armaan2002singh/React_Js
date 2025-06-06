import { useState } from "react"


function App() {
const [color, setColor]= useState('grey')
    function red()
    {
      setColor("red")
    }
    function green()
    {
      setColor("green")
    }
    
// both approaches are used in it - with callback in onclick, and with creating function as well.
  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"><div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl ">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "grey"}} onClick={()=> setColor("grey")}>Default</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}} onClick={red}>Red</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}} onClick={green}>Green</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")}>Blue</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "orange"}} onClick={()=> setColor("orange")}>Orange</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")}>Yellow</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "pink"}} onClick={()=> setColor("pink")}>Pink</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={()=> setColor("purple")}>Purple</button>
        
      </div>
      </div>
    </div> 
    
  )
}


export default App
