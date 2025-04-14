import { Link } from "react-router-dom";

export default function Button() { 
    return(
        <div className="
            mt-11 w-36 h-auto  
            shadow-xl
            bg-gray-50
            flex 
            justify-center-safe 
            rounded-lg  
            hover:-translate-y-3 
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