import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData?.userData || state.auth.userData);
  console.log("✅ Final user ID:", userData?.$id);

  const submit = async (data) => {
    try {
        console.log("🧪 data.title:", data.title);
        console.log("🧪 content:", getValues("content"));
        console.log("🧪 userData:", userData);
        console.log("🧪 data.image[0]:", data.image?.[0]);
      // Ensure content is read from the RTE
      const content = getValues("content");
      if (!content || !data.title || !userData?.$id) {
        console.error("🚫 Missing required fields.");
        return;
      }

      let fileId = post?.featuredimage;

      if (!post) {
        // CREATE MODE
        if (!data.image || !data.image[0]) {
          console.error("🚫 No image file selected.");
          return;
        }

        const file = await appwriteService.uploadFile(data.image[0]);
        fileId = file?.$id;

        if (!fileId) {
          console.error("🚫 File upload failed.");
          return;
        }

        const dbPost = await appwriteService.createPost({
          title: data.title,
          slug: data.slug,
          content,
          status: data.status,
          featuredimage: fileId,
          userid: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }

      } else {
        // UPDATE MODE
        if (data.image && data.image[0]) {
          const newFile = await appwriteService.uploadFile(data.image[0]);
          if (newFile?.$id) {
            await appwriteService.deleteFile(post.featuredimage);
            fileId = newFile.$id;
          }
        }

        const updated = await appwriteService.updatePost(post.$id, {
          title: data.title,
          content,
          featuredimage: fileId,
          status: data.status,
        });

        if (updated) {
          navigate(`/post/${updated.$id}`);
        }
      }

    } catch (error) {
      console.error("❌ Error submitting post:", error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

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
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && post.featuredimage && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredimage)}
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
  );
}
