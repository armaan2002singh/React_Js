import React,{useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = '',
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && 
            <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id} //this is for accessability 
            >
                {label}
            </label>
            }
            <input
            type={type} 
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            // this will be used to reference and in this we have passed our forward reference.
            />
        </div>
    )
})

export default Input
// here we are using the forward reference in this code wherer will use the ref at the end of the code.