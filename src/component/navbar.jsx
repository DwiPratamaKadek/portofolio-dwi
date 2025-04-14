import { Link } from "react-router-dom"

export default function Navbar(){
    return (
        <nav className="bg-white/20 backdrop-blur-sm fixed top-0 w-full ">
            <div className="h-24 flex justify-around items-center">
                <ul className="list-none flex items-center">
                    <li className="pr-4 font-sans text-xl font-medium "><Link to ="/">Dwi Pratama</Link></li>
                </ul>
                <ul className="list-none flex items-center ">
                    <li className="pr-4"><a href="https://github.com/DwiPratamaKadek" target="_blank"><img className="w-8 h-auto" src="image/github.png " alt="github" /></a></li>
                    <li className="pr-4"><a href="https://www.instagram.com/ka.dwip/" target="_blank"><img className="w-8 h-auto" src="image/instagram.png" alt="instagram"/></a></li>
                    <li className="pr-4"><a href="https://mail.google.com/mail/?view=cm&to=dwipratamaikadek@gmail.com&su=Judul&body=Pesan " target="_blank"><img className="w-8 h-auto" src="image/email.png" alt="email" /></a></li>
                </ul>
            </div>

            
        </nav>
    )
}