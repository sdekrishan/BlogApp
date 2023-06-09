"use client"
import React, { useState } from 'react'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@components/Form'

const CreateBlog = () => {
    const {data : session} = useSession();
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({blog:"",tag:""})
    console.log('session',session);
    const createBlog= async(e) =>{
        e.preventDefault();
        setSubmitting(true)

        try {
            const response = await fetch('/api/blog/new',{
                method:"POST",
                body:JSON.stringify({
                    blog:post.blog,
                    userId: session?.user.id,
                    tag:post.tag
                })
            })
            
            if(response.ok){
                router.push("/")
            }
        } catch (error) {
            console.log(error);
        } finally{
            setSubmitting(false)
        }
    }
  return (
    <Form
    type='create'
    post={post}
    setPost = {setPost}
    submitting={submitting}
    handleSubmit = {createBlog}
    />
  )
}

export default CreateBlog