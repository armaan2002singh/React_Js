import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
const [lenght, setLenght] = useState(0)
const [numberAllowed, setNumberAllowed]=useState(false)
const [charatersAllowed, setCharatersAllowed]=useState(false)
const [password, setPassword]=useState("")

const passwordGenerator= useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if (numberAllowed) {
    str += "0123456789"
  }
  if (charatersAllowed) {
    str += "!@#$%^&*-_~"
  }

  for (let i = 1; i <= lenght; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setPassword(pass)

},[lenght, numberAllowed, charatersAllowed, setPassword])// memoise or optimise.
// here i need to resure the method in different fields-->useCallback -HOOK "https://react.dev/reference/react/useCallback"


// HOOK - useEffect - https://react.dev/reference/react/useEffect
  useEffect(()=>{
    passwordGenerator()
  },[lenght, numberAllowed, charatersAllowed, passwordGenerator])

// HOOK- if want to cpoy the targeted value also to provide the indication to user - useRef(), Also called reference HOOK>

    const copypasswordToClipBoard = useCallback(()=>{ 
      passwordRef.current?.select() // to highlight the selected value 
      passwordRef.current?.setSelectionRange(0,20) // will set the selection range of the value.
      window.navigator.clipboard.writeText(password) // if i am working in core react so can use window, if will use NEXT.js then no window because of server side rendering.
    },[password])
  const passwordRef = useRef(null);
  return (
    <>
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-center text-white mb-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-3" 
        placeholder="password"
        ref={passwordRef}/>
        {/* here is the use of useRef() */}
        <button className='outline-none bg-blue-500 text-white p-2 px-4'
        onClick={copypasswordToClipBoard}
        >copy</button>
      </div>
      <div className='flex text-sm text-orange gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={16}
          value={lenght}
          onChange={(e)=>{setLenght(e.target.value)}}
          className='cursor-pointer'/>
          <label > Lenght: {lenght}</label>
        </div>
        <div className='flex items-center gap-s-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          id="characterInput"
          defaultChecked={charatersAllowed} 
          onChange={()=>{
            setCharatersAllowed((prev)=> !prev);
          }} 
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
