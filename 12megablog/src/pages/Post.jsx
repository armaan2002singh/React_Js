import React,{useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import appwriteService from '../appwrite/config'
import {Button, Container} from '../components'

function Post() {
    const [post, setPost]= useState(null)
    const {slug}= useParams()
    const navigate = useNavigate()

    const userData = useSelector((state)=> state.auth.userData);

    //here is the Author use as if the conditions are true then w ehave author other wise not.
    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post) setPost(post);

                else navigate('/');
                
            })
        }else{
            navigate('/');
        }
    },[slug, navigate])
  return (
    <div>
      
    </div>
  )
}

export default Post
