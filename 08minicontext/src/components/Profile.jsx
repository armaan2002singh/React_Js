import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    const{user} = useContext(UserContext)
    console.log(user);
    
  // will use condtitional syntex to return.
  if (!user) return <div>please login</div>

  return <div>welcoome : {user.username}</div>
    
  
}

export default Profile
