import React,{useEffect, useState} from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'
function Home() {
    const [posts, setPosts]= useState()

    useEffect(()=>{    
        //setting the posts in the setPosts of useState(). 
        appwriteService.getPosts().then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    },[])
     
    if(posts.length === 0){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h2 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts
                            </h2>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }else{
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {
                            posts.map((post)=> {
                                    if(post){
                                        <div key={post.$id} className='p-2 w-1/4'>
                                        <PostCard {...post} />{/*post={post} can also this way but there is another way to display post which is written postcard with this way all post will be displayed separately.*/}
                                    </div>
                                    }else{
                                        console.log("no post in map or error in home.jsx...");
                                        
                                    }
                                }
                            )
                        }
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home
