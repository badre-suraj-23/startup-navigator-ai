import MainLayout from "../layouts/MainLayout";

import {
    HiLightningBolt,
    HiCode,
    HiSparkles,
    HiBookOpen,
    HiExternalLink
} from "react-icons/hi";


export default function Resources(){


    const resources = [

        {
            title:"FastAPI",
            description:"Modern Python backend framework for building fast and scalable APIs.",
            category:"Backend Development",
            link:"https://fastapi.tiangolo.com/",
            icon:<HiCode />,
            color:"blue"
        },


        {
            title:"React",
            description:"Build modern, responsive and interactive frontend applications.",
            category:"Frontend Development",
            link:"https://react.dev/",
            icon:<HiLightningBolt />,
            color:"green"
        },


        {
            title:"Generative AI",
            description:"Learn LLM, RAG, LangChain and AI application development.",
            category:"Artificial Intelligence",
            link:"#",
            icon:<HiSparkles />,
            color:"purple"
        },


        {
            title:"Startup Knowledge",
            description:"Funding, business strategy and startup growth resources.",
            category:"Business",
            link:"#",
            icon:<HiBookOpen />,
            color:"orange"
        }

    ];




    return (


        <MainLayout>



            {/* Hero Section */}


            <section className="
            rounded-3xl
            bg-gradient-to-r
            from-blue-700
            via-indigo-700
            to-purple-700
            text-white
            p-8
            md:p-10
            shadow-xl
            ">


                <div className="flex flex-col gap-4">


                    <h1 className="
                    text-3xl
                    md:text-5xl
                    font-bold
                    ">

                        📚 Developer Resources

                    </h1>



                    <p className="
                    text-blue-100
                    max-w-3xl
                    text-lg
                    ">

                        Curated resources for building AI powered applications,
                        backend systems and startup technology.

                    </p>


                </div>


            </section>







            {/* Resource Cards */}


            <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            mt-10
            ">


            {
            resources.map((item,index)=>(


                <a

                key={index}

                href={item.link}

                target="_blank"

                rel="noopener noreferrer"

                className="
                bg-white
                rounded-2xl
                shadow
                p-6
                border
                hover:shadow-xl
                hover:-translate-y-2
                transition
                group
                ">


                    <div className="
                    flex
                    justify-between
                    items-center
                    ">


                        <div className="
                        w-14
                        h-14
                        rounded-xl
                        bg-blue-100
                        flex
                        items-center
                        justify-center
                        text-blue-600
                        text-3xl
                        ">

                            {item.icon}

                        </div>



                        <HiExternalLink
                        className="
                        text-gray-400
                        group-hover:text-blue-600
                        "
                        />


                    </div>





                    <h2 className="
                    text-xl
                    font-bold
                    mt-5
                    text-gray-900
                    ">


                        {item.title}


                    </h2>





                    <span className="
                    inline-block
                    mt-3
                    px-3
                    py-1
                    bg-gray-100
                    rounded-full
                    text-xs
                    text-gray-600
                    ">


                        {item.category}


                    </span>






                    <p className="
                    mt-4
                    text-gray-500
                    text-sm
                    leading-relaxed
                    ">


                        {item.description}


                    </p>



                </a>


            ))
            }



            </div>





            {/* Bottom Info */}


            <div className="
            mt-10
            bg-white
            rounded-2xl
            shadow
            p-8
            border
            ">


                <h2 className="
                text-2xl
                font-bold
                ">

                    🚀 Startup Navigator AI

                </h2>



                <p className="
                text-gray-500
                mt-3
                ">

                    Continue learning Python Backend, FastAPI,
                    Generative AI, RAG and modern software architecture.

                </p>


            </div>



        </MainLayout>


    );

}