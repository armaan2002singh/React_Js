import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
//learn from documentry.
import {Controller} from 'react-hook-form'


export default function RTE({
    name,
    control, // important thing is the control in this which will be pass on the this component.
    label,
    defaultValue = ""
}) {
  return (
    <div className='w-full'> 
    {label &&  <label className='inline-block mb-1 pl-2'>{label}</label>} 
    <Controller
    name={name || "content"}
    control={control} // to provide the control to the parent to provide the access of the all attributes and values.
    render={({field:{onChange}})=>(

        //the element we want to change.
        <Editor
                initialValue={defaultValue}
                init={{
                    initialValue: defaultValue,
                    height: 500,
                    menubar: true,
                    plugins: [
                        "image",
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                        "anchor",
                    ],
                    toolbar:
                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
        />
        // init - what value we want can fill in this init={{here}}
        


    )}
    // in render we will learn that how to track and add fields init.
    // here it is --> {field:{options}} syntex to apply tracking on the field.
    //and in brackets will add element on which we want to render.
    />
    {/* controller will pass the values from here. */}
    </div>
  )
}

