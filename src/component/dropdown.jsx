import { useState, useRef, useEffect} from "react";
import { Transition } from "@headlessui/react";


export default function Dropdwon({buttonText, items, target="_self", rel= ''}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect (() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.addEventListener('mousedown', handleClickOutside)
        } 
    }, [])
    return (
        <div className="relative" ref={dropdownRef}>
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-white 
            text-black 
            px-4 py-2 
            rounded-md 
            flex 
            items-center 
            shadow-lg 
            inset-shadow-sm 
            transition-transform 
            hover:scale-[1.05] 
            hover:bg-gray-100"
        >
            {buttonText}
            <svg
            className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <Transition
            show={isOpen}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
                <div className="
                    absolute 
                    flex 
                    flex-col sm:flex-row      
                    mt-2
                    bg-white  
                    rounded-md 
                    shadow-lg 
                    py-1 
                    z-10" 
                    onClick={(e) => e.stopPropagation}>
                {items.map((item, index) => (
                    <a
                    key={index}
                    href={item.href}
                    target={target}
                    rel={target === '_blank' ? `noopener noreferrer ${rel}`.trim() : rel }
                    className=" flex items-center gap-1 rounded-lg px-4 py-2 text-gray-800 hover:border-2 hover:border-gray-300"
                    onClick={() => {
                        setIsOpen(false);
                        item.onClick?.()
                    }}
                    >
                    {item.icon && <span className="text-gray-500">{item.icon}</span>}  
                    {item.label}
                    </a>
                ))}
                </div>
        </Transition>
        </div>
    );
};
