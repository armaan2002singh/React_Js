// will study to update data in cards by using props.

function Card({username, btntext="Visit me"}){// its by default called props by react. But we can destructuring and can mention the {username} directly. instead of "props".
    console.log(username);
    


    //console.log(props);
    // we have got {empty}_Object with prototypes

    /*Before adding this value, channel - props was an object but now we have got values in --"channel:'Armaan-code'*/
    
    const user = "https://www.bing.com/th/id/OIP.BD9cf1eaFBIVQLMXThVtLgHaE6?w=260&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2";
    return(
    <>
         
        <div className="relative h-[400px] w-[400px] rounded-md mt-4">
        <img
            src={user}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            {btntext || "Visit me"} →
            </button>{/*if some one missed to write the btntext value on the <card/> then we can OR --> ||, But this way of coding reduce the code-readability so will set this value to default in starting. --> btntext="Visit me*/}
        </div>
        </div>
    </>);
}

export default Card;