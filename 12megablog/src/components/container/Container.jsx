import React from 'react'

function Container({children}) { // the value - children starts from small letter.
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
  
}

export default Container

