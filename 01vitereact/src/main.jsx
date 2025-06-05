import react from 'react'
import ReactDom from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

// for experiment -->
function MyApp(){
  return(
    <h1>my - app</h1>
  );
}

// if according the theory normal function converts into tree structure with the help of bundler then is there any possibility that it wil work with a direct Reactelement?  -->


  // const ReactElement = {
  //     type:'a',
  //     props:{
  //         href:'https://google.com',
  //         target:'_blank'
  //     },
  //     children:'Click me visit google'
  // } 
  // [NOTE]--> here this code is not working because this was custom code developed by me and also there was a function as well develop for it to render it to HTML file. But here in this file the function which is rendering the content is developed by react-library and there are strong chance that it will expect the properties and values which are default mention i the library.


// NEXT element -->
  const anotherElement = (  
      <a href='https://google.com' target='_blank'>Visit google</a>
) //--> it is working because it is built directly and there no use of bundler even not required to because it is directly picked by the render. Even in normal syntex- with small-case first letter
  


// [NOTE]---declaring the global variable to check the hey- evaluat expression case. ---> well for this case answer is when the whole tree is created in the createElement of react then the anotheruserhey is also added into the object as another property.
const anotherhey = "Armaan testing the hey  evaluat eexpression"

  const ReactElement = react.createElement(//injected by babal
  // special syntex
  'a', //first expected element-tag
  {
    href:'https://google.com',
    target:"_blank"
  }, //second object
  'click me to access google', // last one is expected as DIRECT TEXT.
  anotherhey// is a evaluated expression.
  )// createElement also take objects but all are predefined.





ReactDom.createRoot(document.getElementById('root')).render(
  //<App/> // here bundler is used to make this type of sytex of JSX 

  //MyApp() // can also write in this way but no recommended.


  // DIRECT OBJECT-->
  //ReactElement -->will not work, but why it is explained above.

  //  for another element -->
  //anotherElement

  // A DIRECT-REACTELEMENT created by using createElement of react.
  ReactElement
)


// main.jsx(javascript XML & index.js both are same. But term jsx is used to refer component.)

//But in vite generated project react.script is not present then how the scripts are injected?
/*

1. first thing is index.html is out side not in public.
2. And the javaScript is directly loaded to the Main page(index.html)

*/