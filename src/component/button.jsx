import { Link } from "react-router-dom";

export default function Button() { 
    return(
        <div className="
            w-36 h-auto  
            shadow-lg
            bg-white
            flex 
            justify-center-safe 
            rounded-lg  
            hover:scale-[1.05] 
            hover:shadow-md
            hover:bg-gray-100 
            transition-all 
            inset-shadow-sm
            border-b-gray-200
            duration-300"> 
            <Link className="p-2 "to="/#project">
                My Project
            </Link>
        </div>
    )
}