import { div } from "framer-motion/client";

export default function Footer (){
    return (
        <div className="w-full h-52  grid place-items-center font-sans mt-48 inset-shadow-sm ">
                <h1 className=" text-3xl p-5 font-semibold"> Get in Touch </h1>
                <p>Bali, Indoneisa </p>
                <p>+62 851-7325-6156</p>
                <a className="mb-8" href="https://mail.google.com/mail/?view=cm&to=dwipratamaikadek@gmail.com&su=Judul&body=Pesan" target="_blank">dwipratamaikadek@gmail.com</a>
          
        </div>
    )
}