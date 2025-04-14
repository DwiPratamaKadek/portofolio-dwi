
export default function Box({children, className = "", ...props}) {
    return (
        <div className={`inline-block p-1 border-t border-2 border-gray-300 rounded-md shadow-md  transition-transform hover:scale-[1.03]  ${className}`}
        {...props}
        >
            {children}
        </div> 
    )
}