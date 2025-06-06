import Test from './components/test'
function App() {
// if if want to use variable in it then there isa syntex for it which is -->{} 

//  example {hey} in jsx
const hey = "hey! - Armaan"
  return (
  <>
    <Test/>
    <h3>1. hello i am using fragement here! {hey}</h3>
  </>
  )
} // well here in the above code written - {hey} is an evalutated expression. --> it means i can only write final out come in it not the javascript-codes, Can do but out side of the return();


export default App
// if i want to return the component like Text with other HTML tags then, can use - <>code</> (called fragement.)


// react fiber concept from github repo.--https://github.com/acdlite/react-fiber-architecture/tree/master