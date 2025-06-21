function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
        {/* placed the ...props in the code because if in case if used will pass any new property the  ti will be present fromt this. */}
      {children}
    </button>
  )
}

export default Button

// concept of the forward reference --> where if i am making a form where the different components of input and buttons are used and the useState of those components are accessed in the other component is called forward reference. 
