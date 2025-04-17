import React from "react";
import ImageBox from "./imageBox";
import Box from "./box";
import DynamicLink from "./dynamicLink";



export default function ProjectShowCase ({
    images = [],
    title = "JUDUL PROJECT",
    description = "",
    tags = [],
    link = { href: "#", text: "Menuju website" },
})
{
return (
    <div className="w-full px-4 font-sans grid place-content-center mb-10 ">
                <div className=" flex flex-col md:flex-row justify-center gap-20 md:gap-32 max-w-[900px]">
                    <div className="
                    ml-5    
                    w-[100vm]
                    max-w-[300px]
                    md:w-[50%] 
                    lg:max-w-[500px] 
                     ">
                        {images.map((img, index) => (
                            <ImageBox 
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className=" border-0 p-2 w-full h-auto object-contain inset-shadow-sm"
                            />
                        ))}
                    </div>
                    {/* Untuk Deskripsi */}
                    <div className="ml-10 sm:w-[40%]">
                        <h1 className="text-2xl font-bold font-sans">{title}</h1>
                        <p>{description}</p>
                        <div className="flex gap-1.5 mt-2 ">
                        {tags.map((tag, index)=>(
                            <Box key={index} className="text-sm" >{tag}</Box>
                        ))}
                        </div>
                        <div>
                            <Box className="mt-4 p-2 rounded-xl" >
                                <DynamicLink href={link.href} target="_blank">{link.text} </DynamicLink>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>

    // <div className="w-full px-4  font-sans grid place-content-center mb-10">
    //     <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32">
    //         {/* Bagian Gambar */}
    //         <div className="w-full md:w-[35%] lg:w-[40%]">
    //         {images.map((img, index) => (
    //             <ImageBox
    //             key={index}
    //             src={img.src}
    //             alt={img.alt}
    //             height="200px"
    //             className="border-0 p-3 w-full h-full object-cover inset-shadow-sm"
    //             style={{ width: "100%", height: "100%" }}
    //             />
    //         ))}
    //         </div>

    //         {/* Bagian Deskripsi */}
    //         <div className="w-[50%]">
    //         <h1 className="text-2xl font-bold">{title}</h1>
    //         <p className="mt-2 text-gray-700">{description}</p>

    //         {/* Tags/Teknologi */}
    //         <div className="flex gap-1.5 mt-4">
    //             {tags.map((tag, index) => (
    //             <Box key={index}>{tag}</Box>
    //             ))}
    //         </div>

    //         {/* Link */}
    //         <Box className="mt-4">
    //             <DynamicLink href={link.href} target="_blank">
    //             {link.text}
    //             </DynamicLink>
    //         </Box>
    //         </div>
    //     </div>
    // </div>
  );
}