import React,{useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({post}) { //these all values will come from post the button will be clicked.
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm(
        {//we wil add values, those will be required.
                defaultValues: {
                title: post?.title || "",
                slug: post?.$id || "",
                content: post?.content || "",
                status: post?.status || "active",
            },
        }
    );
    // here the control present in it will passed to the RTE.
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    //submit...
    const submit = async (data)=>{
        if(post){
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]): null;
            //now next is for delete previous file.
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file? file.$id : undefined
            })
            if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
            }
        }else{
               const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

               if(file){
                const fileId = file.$id
                data.featuredImage = fileId
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
               }

            }

    }

    //slug transform
    const slugTransform = useCallback((value)=>{
        if(value && typeof value ==='string')
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')// here in the replace we can match any kind of pattern.
            .replace(/\s/g,'-')
        
            return'';
    },[])
// NOTE --> here the interview question is how to use this method?
// -->
    
    React.useEffect(()=>{
        //now here how the values are watched and written now will check here with unique kind of syntex.

        const subscription = watch((value, {name})=>{
            if(name === 'title'){
                setValue('slug', slugTransform(value.title),
                    {shouldValidate:true}
                );
            }
        });
        return ()=> subscription.unsubscribe(); // here it is the concept of memory management. Also to avoid the loop of running again and again.
        
    },[watch, slugTransform, setValue]) // here we have declared the some of the dependencies in this React.useEffect()

  return (
    
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}