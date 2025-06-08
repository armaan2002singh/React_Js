import React from "react";

const UserContext = React.createContext()
// every context will give provider.

export default UserContext;
// provider



/*
<UserContext>
//example-->
<Login/>
<Card/>
// if i will write the components in this means will wrap them then they will get access of it.

</UserContext>
*/