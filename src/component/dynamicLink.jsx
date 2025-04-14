export default function DynamicLink({href, children, target ='_self', rel = '', className = '', ...props}) {
    return ( 
        <a 
            href={href}
            target={target}
            rel={target === '_blank' ? `noopener noreferrer ${rel}`.trim() : rel }
            className={className}
            {...props}
        > 
            {children}
        </a>
    )
}