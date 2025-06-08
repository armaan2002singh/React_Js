import React from 'react'
import { useParams } from 'react-router-dom'


//https://www.youtube.com/watch?v=VJov5QWEKE4&t=2257s - timestamp - 44:00
function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>
      user: {id}
    </div>
  )
}

export default User
