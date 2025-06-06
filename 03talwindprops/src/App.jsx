import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
function App() {
  

  let channel1 = {
    name:"Armaan",
    bio:"i am a MERN developer and love to develop Frontends as well as backends.",
    age:23
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="Armaan-code" btntext="click me" />{/*the values we will pass from here will be recieved by the props of funtion Card.
      Before adding this value, channel - props was an object but now we have got values in --"channel:'Armaan-code'*/}

      {/* myArr=[1,2,3,4] --> is an syntex error cannot use it in the card as props. 
      Also showing this error while passing the Object as well.
      
      But we can declared the variable of Array,Object in the function then can give the reference of it inside this jsx return.--<Card channel12={channel1} /> with a proper syntex. 
      -->innerObj={channel1},  innerArr = {newArr}
      */}


      <Card username="Maan-code" btn-text="click me"/> {/* if i will not pass this btntext and || OR is already used.*/}
    </>
  )// [NOTE]--->
  // with help of this method of components i can reuse the card component as pr my requirement, even in any other file by just importing it or reusing the tag again and again.....
}

export default App

// next will are going to learn props to make code reusable.
