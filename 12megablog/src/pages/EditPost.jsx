import React, { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteServive from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams() //Edit in the concept of edit slug will be useed.
    const navigate = useNavigate()


    useEffect(() => {
        if (slug) {
            appwriteServive.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null

}

export default EditPost
