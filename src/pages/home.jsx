import { useEffect, useRef } from "react";
import Button from "../component/button"
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, animate } from 'framer-motion';
import ImageBox from "../component/imageBox";
import { div, image } from "framer-motion/client";
import Box from "../component/box";
import DynamicLink from "../component/dynamicLink";
import ProjectShowCase from "../component/projectShowCase";
import Footer from "../component/footer";



export default function Home(){
    const name = "I'M Dwi."
    const aboutME = "i’m a front - end developer currently diving deep into React and UI/UX design. Enjoys turning code int interactive and visually appealing interfaces while continuously learning modern concepts like components, state management, and user friendly design principles, Committed to growing through challenges, refining skills, and contributing to better digital experiences.  "
    const location = useLocation();
   
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
            <div className="h-screen w-full bg-[url('/image/Group2.png')] bg-cover">  
                <div className='font-sans grid place-content-center'>
                    <motion.h1 style={{x, opacity}}  className='font-semibold mt-[200px] ml-4 text-[64px] leading-tight'>Hello,</motion.h1>
                    <motion.h1 style={{x, opacity}}  className='font-semibold  text-[200px] leading-none'>{name}</motion.h1>
                    <motion.p style={{x, opacity}}  className="font-light w-[809px] ml-4  ">{aboutME}</motion.p>
                    <motion.div style={{x, opacity}} className=" flex ml-4 gap-1.5 mt-2">
                        <Box><DynamicLink href="https://www.instagram.com/ka.dwip/" target="_blank"> ka.dwip</DynamicLink></Box>
                        <Box><DynamicLink href="https://mail.google.com/mail/?view=cm&to=dwipratamaikadek@gmail.com&su=Judul&body=Pesan" target="_blank">dwipratamaikadek@gmail.com</DynamicLink></Box>
                        <Box><DynamicLink href="https://github.com/DwiPratamaKadek" target="_blank">dwi_kadek</DynamicLink></Box>
                    </motion.div>
                    <motion.div style={{x, opacity}} className="ml-4"><Button/></motion.div>
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
            <motion.div style={{opacity, scale}} ref={ref} className="border-t border-gray-300 my-64 mx-16">
                <h1 className="text-[48px] mb-14 font-bold mt-32"> About Me </h1>
                <p className="w-[645px] font-light">{aboutME}</p>
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
    ]
    const img = [
        {
            src : '/image/figma.png',
            alt : 'gambar fimga',
            
        },
        {
            src :'/image/js.png',
            alt : 'gambar javascript',  
            
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
            <h1 className="text-[40px] mb-20 font-semibold mt-32 "> Teach Me </h1>
            <div className="w-full max-w-[900px] px-4">
                <div className="flex justify-center-safe ">
                {images.map((img, index) => (
                    <ImageBox 
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width="100px"
                    height="100px"
                    className="border-2 p-3"
                    />
                ))}
                </div>
            </div>
                <h1 className="text-[40px] mb-20 font-semibold mt-32 "> Steal Learning </h1>
                <div className="w-full max-w-[900px] px-4">
                <div className="flex justify-center">
                {img.map((img, index) => (
                    <ImageBox 
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    width="100px"
                    height="100px"
                    className="border-2 p-3"
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
    return(
        <motion.div style={{opacity, scale}} ref={ref} id="project">
            <div className="flex justify-center mt-48"><div className="border-t border-gray-300 w-full max-w-[900px] "></div></div>
            <div className="w-full max-w-[900px] px-4 font-sans grid place-content-center">
            <h1 className="text-[40px] mb-20 font-semibold mt-32"> Project </h1>
        </div>
        <div>
            <ProjectShowCase {...project1}> </ProjectShowCase>
            <ProjectShowCase {...project2}> </ProjectShowCase>
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







