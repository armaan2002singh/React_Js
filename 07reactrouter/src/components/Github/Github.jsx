import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/armaan2002singh`)
    //     .then((res)=> res.json())
    //     .then((data)=> {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <>
      {/* <img className='center' src={data.avatar_url}  width={300}/> */}
<div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className="container m-4 shadow-lg border grid grid-cols-2">
  {/* Left Column */}
            <div className="border p-4 flex flex-col justify-between">
                <img
                src={data.avatar_url}
                style={{width:300}}
                className="w-full border-b border-black mb-4"
                alt="git_picture"
                />

                <div>
                <h5 className="text-xl font-semibold mb-2">Github</h5>
                <p className="mb-4">Followers: {data.followers}</p>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item mt-2">Name: {data.name}</li>
                    <li className="list-group-item ">Repositories : {data.public_repos}</li>
                    <li className="list-group-item mt-1 border-2 p-2 w-30">{data.bio}</li>
                </ul>

                <div>
                    
                    <a href="https://github.com/armaan2002singh"  className="card-link text-orange-600">GITHUB</a>
                </div>
                </div>
            </div>

  {/* Right Column */}
            <div className="bg-white flex items-center justify-center p-6 flex-col">
                <img
                    src={'https://img.freepik.com/premium-photo/illustration-digital-website-clipart_756405-52013.jpg'}
                    style={{ width: 400 }}
                    className=" mb-4"
                    alt="git_picture"
                />
                <p className="text-gray-700 text-center max-w-xl mt-4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
 
                </p>
            </div>

</div>
</div>



    </>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response =  await fetch(`https://api.github.com/users/armaan2002singh`)
    return response.json()
}
