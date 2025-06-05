import React from 'react'; //it is core foundational library for references.
import ReactDOM from 'react-dom/client';// is an implementation on web-dom.

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);

//IMPORTANT -     "react-scripts": "5.0.1",
// it is the reason the we donot link js to the index.html. And adds the number of script behind working.


//render - kind of representation.
// also we can make custom tag.


// ABOUT - <React.StrictMode>.........................................
/* is a tool for highlighting potential problems in a React application during development. It doesn’t render anything visible in the UI and has no effect in production builds — it's purely for helping developers write better code.

Here’s an in-depth explanation of why we use it and what it does:

🔍 Purpose of React.StrictMode
It helps you:

Identify unsafe lifecycle methods

Detect legacy API usage

Detect unexpected side effects

Warn about deprecated patterns

Prepare your code for future React features

*/