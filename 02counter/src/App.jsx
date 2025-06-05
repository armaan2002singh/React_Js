import { useState, useEffect } from 'react'

function App() {

//useState -- to change the state or propogate in dom.
    /*[NOTES]-->
    // to solve this problem in classic js we will use references like getting element and etc..

    //but here in react, UI controled by itself.

    // react provides the special ways to update data UI called - [HOOKS]
    */


let [counter, setCounter]= useState(0)// can give any prop in useState.
//let counter = 15

    
      const addvalue = ()=>{
        if(counter<20){
          //counter = counter + 1  
          //console.log('value added', counter);
          setCounter(counter + 1)
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
