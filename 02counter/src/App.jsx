import { useState, useEffect } from 'react'

function App() {

//useState -- to change the state or propogate in dom.
    /*[NOTES]-->
    // to solve this problem in classic js we will use references like getting element and etc..

    //but here in react, UI controled by itself.

    // react provides the special ways to update data UI called - [HOOKS]
    */


const [counter, setCounter]= useState(0)// can give any prop in useState.
//let counter = 15

    
      const addvalue = ()=>{
        if(counter<20){
          //counter = counter + 1  
          //console.log('value added', counter);
          setCounter(counter + 1)
          // case study - if i will copy the code setCounter then will it change the increment result. like if i will write the setCounter x 5 then will be result equal to +5?

          //[NOTE--> well this whole concept is not related to the set counter, it is with USESTATE... --> will send the multiple setCounter in batch because of react-fiber.]

          // in any case i want to use that approcah then, will use the preCounter (its previous state) or use the call back function present in the setCounter((preCounter)=>{})
            // if we can name it according to our own understanding but if we will use mutliple name then it will create code inconsistancy. So try to name it only one name
            // setCounter(preCounter => preCounter +1)
            // setCounter(preCounter => preCounter +1)
            // setCounter(preCounter => preCounter +1)
            // setCounter(preCounter => preCounter +1) 

            // here we are using the previous updated variable.
            
        }else{
          alert('value is already 20')
        }
      }
      const lessvalue = ()=>{
        if(counter>0){
        //counter = counter -1 
        //console.log('clicked :', counter);
        setCounter(counter - 1)
        }else{
          alert('value is already 0')
        }
      
      }

    

  

  return (
    <>
    <h1>React Project-2</h1>
    <h2>Counter value = {counter}</h2>
    <button id='add' onClick={addvalue}
    >Add value</button><br />
    <button id='sub' onClick={lessvalue} >Remove value</button>
    </>
  )
}

export default App
