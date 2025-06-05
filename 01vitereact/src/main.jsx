import react from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <App/>
)
// main.jsx(javascript XML & index.js both are same. But term jsx is used to refer component.)

//But in vite generated project react.script is not present then how the scripts are injected?
/*

1. first thing is index.html is out side not in public.
2. And the javaScript is directly loaded to the Main page(index.html)

*/