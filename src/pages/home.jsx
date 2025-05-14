import { useEffect, useRef } from "react";
import Button from "../component/button"
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import ImageBox from "../component/imageBox";
import ProjectShowCase from "../component/projectShowCase";
import Footer from "../component/footer";
import Dropdwon from "../component/dropdown";
import { FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";



export default function Home(){
    const name = "I'M Dwi."
    const aboutME = "i’m a front - end developer currently diving deep into React and UI/UX design. Enjoys turning code int interactive and visually appealing interfaces while continuously learning modern concepts like components, state management, and user friendly design principles, Committed to growing through challenges, refining skills, and contributing to better digital experiences.  "
    const location = useLocation();
    const dropdwonItems = [
        {label: "ka.dwip", href : "https://www.instagram.com/ka.dwip/",icon:<FaInstagram />,  onclick: () => console.log('its chacked')},
        {label: "dwipratamaikadek@gmail.com", href : "https://mail.google.com/mail/?view=cm&to=dwipratamaikadek@gmail.com&su=Judul&body=Pesan",icon:<FaEnvelope />,  onclick: () => console.log('its chacked')},
        {label: "dwi_kadek", href : "https://github.com/DwiPratamaKadek",icon:<FaGithub /> ,onclick: () => console.log('its chacked')}

    ]
   
    // // untuk membuat animasi awal
    const mountProgress = useMotionValue(0)

    const x = useTransform(mountProgress, [0, 1], [-500, 0 ]);
    const opacity = useTransform(mountProgress, [0,0.5,1], [0, 0.5, 1]);

    useEffect (() => {
        animate(mountProgress,1,
             {duration : 2, 
                delay:0.3, 
                ease : "easeOut"
         })
    },[mountProgress])

     useEffect (() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if(element){    
                element.scrollIntoView({behavior : "smooth"})
            }
        }
    }, [location])

    
    return (
        <>
            <div className="h-screen w-full bg-[url('/image/Group2.png')] bg-cover bg-no-repeat">  
                <div className='container mx-auto px-4 h-full flex items-center justify-center'>
                    <div className="font-sans w-full max-w-4xl">
                        <motion.h1 style={{x, opacity}}
                            className='font-semibold mt-[200px] ml-4 text-4xl leading-tight sm:text-3xl md:text-4xl '>Hello,</motion.h1>
                        <motion.h1 style={{x, opacity}} 
                            className='font-semibold text-8xl ml-3 sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[200px] '>{name}</motion.h1>
                        <motion.p style={{x, opacity}}  
                            className="font-light w-max-[800px] ml-4 mt-2 mr-2 text-max-[20px]">{aboutME}</motion.p>
                        <motion.div style={{x, opacity}} 
                            className="flex flex-row ml-4 gap-1.5 mt-4">
                                <Dropdwon buttonText="Contact Me" items={dropdwonItems} target="_blank"></Dropdwon>
                                <div className="ml-4"><Button></Button></div>
                            {/* <Box><DynamicLink href="https://www.instagram.com/ka.dwip/" target="_blank"> ka.dwip</DynamicLink></Box>
                            <Box><DynamicLink href="https://mail.google.com/mail/?view=cm&to=dwipratamaikadek@gmail.com&su=Judul&body=Pesan" target="_blank">dwipratamaikadek@gmail.com</DynamicLink></Box>
                            <Box><DynamicLink href="https://github.com/DwiPratamaKadek" target="_blank">dwi_kadek</DynamicLink></Box> */}
                        </motion.div>
                        
                    </div>
                </div>
            </div>
            <div className='grid place-content-center'>
                <AboutMe />
            </div>
            <div className="mt-[100px]">
                <Learning />
            </div>
            <div className="mb-10">
                <Project />
            </div>
            <div>
                <Footer />
            </div>
        </>
        )
        
    }

    function AboutMe(){
        const ref = useRef(null);
        const {scrollYProgress} = useScroll({
            target : ref,
            offset : ["start end","center center"]
        });

        const opacity = useTransform(scrollYProgress,[0,1],[0,1]);
        const scale = useTransform(scrollYProgress, [0,1],[1,1.1])


        const aboutME = "i’m a front - end developer currently diving deep into React and UI/UX design. Enjoys turning code int interactive and visually appealing interfaces while continuously learning modern concepts like components, state management, and user friendly design principles, Committed to growing through challenges, refining skills, and contributing to better digital experiences.  "

        return (
            <motion.div 
                style={{ opacity, scale }} 
                ref={ref} 
                className="border-t border-gray-300 my-20 md:my-32 lg:my-64 mx-4 md:mx-8 lg:mx-16"
            >
                <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] mb-8 md:mb-12 lg:mb-14 font-bold mt-12 md:mt-20 lg:mt-32">
                    About Me
                </h1>
                <p className="font-light max-w-[645px] text-base md:text-lg leading-relaxed">
                    {aboutME}
                </p>
                </div>
            </motion.div>
    )
}

function Learning (){   
    const images = [
        {
            src : '/image/figma.png',
            alt : 'gambar fimga',
            
        },
        {
            src :'/image/js.png',
            alt : 'gambar javascript',
            
        },
        {
            src :'/image/php.png',
            alt : 'gambar php',
        },
        {
            src :'/image/react.png',
            alt : 'gambar react',
            
        },
        {
            src :'/image/ci.png',
            alt : 'gambar ci',
            
        },
        {
            src :'/image/mysql.png',
            alt : 'mysql',  
        },
        {
            src :'/image/flutter.png',
            alt : 'flutter',  
        },
        {
            src :'/image/python.png',
            alt : 'flutter',  
        },
        {
            src :'/image/laravel.png',
            alt : 'flutter',  
        },
    ]

    const ref = useRef(null);
        const {scrollYProgress} = useScroll({
            target : ref,
            offset : ["start end","center center"]
        });

        const opacity = useTransform(scrollYProgress,[0,1],[0,1]);
        const scale = useTransform(scrollYProgress, [0,1],[1,1.1])


    return(
        <motion.div style={{opacity,scale}} ref={ref} className="flex flex-col items-center">
            <div className="border-t border-gray-300 w-full max-w-[900px]"></div>
            <h1 className="text-[40px] mb-20 font-semibold mt-32 "> What i Learned </h1>
            <div className="w-full max-w-[500px] px-4 mx-auto">
                <div className="flex flex-wrap justify-center-safe gap-2">
                {images.map((img, index) => (
                    <ImageBox 
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width="75px"
                    height="75px"
                    className=" border-2 p-3"
                    />
                ))}
                </div>
            </div>
        </motion.div>
    )
}

function Project () {

    const ref = useRef(null);
        const {scrollYProgress} = useScroll({
            target : ref,
            offset : ["start end","center center"]
        });

        const opacity = useTransform(scrollYProgress,[0,1],[0,1]);
        const scale = useTransform(scrollYProgress, [0,1],[1,1.1])
    
    const project1 = {
        images: [
        { src: "/image/catatan-belanja.png", alt: "Project 1" },
        ],
        title: "Note Shop App",
        description: "Aplikasi e-commerce untuk catatan digital.",
        tags: ["React.js", "JavaScript", "Tailwind CSS"],
        link: {
            href: "https://note-shop.vercel.app/",
            text: "Lihat Demo",
        },
    }

    const project2 = {
        images: [
        { src: "/image/jendela-wisata.png", alt: "Project 2" },
        ],
        title: "Jendela Wisata ",
        description: "Jendela Wisata bertujuan untuk menyajikan informasi lengkap tentang destinasi wisata dari berbagai daerash di bali, mulai dari tempat wisata alam, sejarah, budaya, hingga wisata kuliner. Pengguna dapat menelusuri berbagai destinasi wisata berdasarkan kategori, lokasi, atau aktivitas yang diminati.",
        tags: ["CI", "JavaScript", "CSS", "PHP"],
        link: {
            href: "https://pariwisata.lab-trpl.id/",
            text: "Lihat Demo",
        },
    }

    const project3 = {
        images: [
        { src: "/image/weather-map.png", alt: "Project 3" },
        ],
        title: "Cuaca Indo ",
        description: "Weather Map adalah aplikasi web sederhana yang digunakan untuk mengetahui kondisi cuaca terkini di berbagai wilayah di Indonesia secara praktis dan cepat.",
        tags: ["React", "TypeScript", "Tailwindcss", "openAPI", "Vite"],
        link: {
            href: "https://weather-map-psi.vercel.app/",
            text: "Lihat Demo",
        },
    }
    return(
        <motion.div style={{opacity, scale}} ref={ref} id="project">
            <div className="flex justify-center mt-48"><div className="border-t border-gray-300 w-full max-w-[900px] "></div></div>
            <div className="w-full px-4 font-sans grid place-content-center">
                <h1 className="text-[40px] mb-20 font-semibold mt-32"> Project </h1>
            </div>
        <div>   
            <ProjectShowCase {...project1}> </ProjectShowCase>
            <ProjectShowCase {...project2}> </ProjectShowCase>
            <ProjectShowCase {...project3}> </ProjectShowCase>
        </div>

            {/* <div className="w-full px-4 font-sans grid place-content-center mb-10 ">
                <div className=" flex flex-col md:flex-row justify-center gap-10  md:gap-32 ">
                    <div className="w-full md:w-[35%] lg:w-[40%] ">
                        {images.map((img, index) => (
                            <ImageBox 
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                height="200px"
                                className="border-0 p-3 w-full h-full object-cover inset-shadow-sm"
                                style = {{width : '100%', height: '100%'}}
                            />
                        ))}
                    </div>
                    <div className="w-[50%]">
                        <h1>JUDUL PROJECT</h1>
                        <p>{des}</p>
                        <div className="flex gap-1.5">
                            <Box className="mt-4">React.js</Box>
                            <Box className="mt-4">JavaScript</Box> 
                        </div>
                        <Box className="mt-4">
                            <DynamicLink href="https://note-shop.vercel.app/" target="_blank">Menuju website </DynamicLink>
                        </Box>
                    </div>
                </div>
            </div> */}
        </motion.div>
    )

}







