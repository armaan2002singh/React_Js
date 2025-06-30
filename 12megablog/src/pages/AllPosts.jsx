import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts([])  // 🔍 Use [] to disable filter temporarily
      .then((posts) => {
        if (posts && posts.documents.length > 0) {
          console.log("Fetched posts:", posts.documents);
          setPosts(posts.documents)
        } else {
          console.log("No posts found.");
        }
      })
      .catch((err) => console.error("Error fetching posts:", err))
  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
