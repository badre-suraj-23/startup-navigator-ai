import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

import {
    HiSparkles,
    HiDocumentText,
    HiDatabase,
    HiServer,
    HiArrowRight,
    HiLightningBolt,
    HiShieldCheck,
} from "react-icons/hi";

import { getDashboardStats } from "../services/dashboardService";


export default function Dashboard() {


    const [dashboardStats, setDashboardStats] = useState({

        total_articles: 0,
        total_searches: 0,
        total_categories: 0,
        last_search: "No Search"

    });


    const [loading,setLoading] = useState(true);



    useEffect(()=>{

        loadDashboard();

    },[]);



    const loadDashboard = async()=>{

        try{

            const data = await getDashboardStats();

            setDashboardStats(data);

        }
        catch(error){

            console.log(
                "Dashboard Error:",
                error
            );

        }
        finally{

            setLoading(false);

        }

    };



    const stats = [

        {
            title:"Articles",
            value:dashboardStats.total_articles,
            desc:"Knowledge Base",
            color:"bg-blue-50",
            text:"text-blue-600",
            icon:<HiDocumentText className="text-4xl"/>,
        },


        {
            title:"AI Search",
            value:dashboardStats.total_searches,
            desc:"Total Searches",
            color:"bg-green-50",
            text:"text-green-600",
            icon:<HiSparkles className="text-4xl"/>,
        },


        {
            title:"Categories",
            value:dashboardStats.total_categories,
            desc:"Article Categories",
            color:"bg-purple-50",
            text:"text-purple-600",
            icon:<HiDatabase className="text-4xl"/>,
        },


        {
            title:"Last Search",
            value:dashboardStats.last_search,
            desc:"Recent Query",
            color:"bg-orange-50",
            text:"text-orange-600",
            icon:<HiServer className="text-4xl"/>,
        },

    ];



    return (

    <MainLayout>


        {/* Hero */}


        <section className="
        rounded-3xl 
        overflow-hidden 
        bg-gradient-to-r 
        from-blue-700 
        via-indigo-700 
        to-purple-700 
        text-white 
        p-5 
        sm:p-8 
        lg:p-10 
        shadow-xl
        ">


            <div className="
            flex 
            flex-col 
            lg:flex-row 
            lg:items-center 
            lg:justify-between 
            gap-8
            ">


                <div>


                    <span className="
                    inline-flex 
                    items-center 
                    gap-2 
                    bg-white/20 
                    px-4 
                    py-2 
                    rounded-full 
                    text-sm
                    ">


                        <HiLightningBolt/>

                        AI Powered Startup Assistant


                    </span>



                    <h1 className="
                    text-3xl 
                    sm:text-4xl 
                    lg:text-5xl 
                    font-bold 
                    mt-6
                    ">

                        Welcome Back 👋

                    </h1>



                    <p className="
                    mt-4 
                    text-blue-100 
                    max-w-2xl 
                    text-base 
                    sm:text-lg
                    ">

                        Manage your startup knowledge base, perform AI-powered semantic search, and organize business documents using FastAPI, Groq, PostgreSQL, Qdrant Cloud, and Jina AI Embeddings.

                    </p>



                    <div className="
                    flex 
                    flex-col 
                    sm:flex-row 
                    gap-4 
                    mt-8
                    ">


                        <Link
                        to="/search"
                        className="
                        bg-white 
                        text-blue-700 
                        px-6 
                        py-3 
                        rounded-xl 
                        font-semibold 
                        flex 
                        items-center 
                        justify-center
                        gap-2
                        hover:scale-105
                        transition
                        "
                        >

                            🤖 AI Search

                            <HiArrowRight/>

                        </Link>



                        <Link
                        to="/articles"
                        className="
                        bg-blue-900/40
                        border
                        border-white/20
                        px-6
                        py-3
                        rounded-xl
                        text-center
                        hover:bg-blue-900/60
                        transition
                        "
                        >

                            📚 Manage Articles

                        </Link>


                    </div>


                </div>




                <div className="
                hidden 
                lg:flex 
                justify-center
                ">


                    <div className="
                    w-56 
                    h-56 
                    rounded-full 
                    bg-white/10 
                    flex 
                    items-center 
                    justify-center
                    ">


                        <div className="
                        w-40 
                        h-40 
                        rounded-full 
                        bg-white/20 
                        flex 
                        items-center 
                        justify-center 
                        text-7xl
                        ">

                            🚀

                        </div>


                    </div>


                </div>



            </div>


        </section>





        {/* Statistics */}


        <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        xl:grid-cols-4 
        gap-6 
        mt-10
        ">


        {

        stats.map((item,index)=>(


            <div
            key={index}
            className={`
            ${item.color}
            rounded-2xl
            p-6
            shadow
            hover:shadow-xl
            transition
            hover:-translate-y-1
            `}
            >


                <div className={item.text}>

                    {item.icon}

                </div>


                <h3 className="mt-5 text-gray-500">

                    {item.title}

                </h3>



                <h2 className="
                text-3xl
                font-bold
                mt-2
                truncate
                ">

                    {
                    loading 
                    ? "..."
                    : item.value
                    }

                </h2>


                <p className="text-gray-500 mt-2">

                    {item.desc}

                </p>


            </div>


        ))

        }


        </div>





        {/* Quick Actions */}


        <div className="
        grid 
        grid-cols-1 
        lg:grid-cols-3 
        gap-6 
        mt-10
        ">


            <Link
            to="/search"
            className="
            bg-white
            rounded-2xl
            shadow
            p-6
            hover:shadow-xl
            transition
            "
            >

                <HiSparkles className="text-3xl text-blue-600"/>


                <h2 className="text-xl font-bold mt-4">

                    Ask AI

                </h2>


                <p className="text-gray-500">

                    Search startup knowledge using AI

                </p>


            </Link>




            <Link
            to="/articles"
            className="
            bg-white
            rounded-2xl
            shadow
            p-6
            hover:shadow-xl
            transition
            "
            >

                <HiDocumentText className="text-3xl text-green-600"/>


                <h2 className="text-xl font-bold mt-4">

                    Manage Articles

                </h2>


                <p className="text-gray-500">

                    Create, edit and organize documents

                </p>


            </Link>





            <div
            className="
            bg-white
            rounded-2xl
            shadow
            p-6
            "
            >

                <HiDatabase className="text-3xl text-purple-600"/>


                <h2 className="text-xl font-bold mt-4">

                    Knowledge Base

                </h2>


                <p className="text-gray-500">

                    Powered by Qdrant Cloud + Jina AI Embeddings + Groq

                </p>


            </div>


        </div>





        {/* System Status */}


        <div className="
        bg-white
        rounded-2xl
        shadow
        mt-10
        p-6
        sm:p-8
        ">


            <h2 className="text-2xl font-bold mb-6">

                🟢 System Status

            </h2>



            <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-5
            ">


            {
            [
                "FastAPI & JWT Auth",
                "PostgreSQL",
                "Groq AI",
                "Qdrant Cloud",
                "Jina AI Embeddings",
                "React"

            ].map(item=>(


                <div
                key={item}
                className="
                border
                rounded-xl
                p-5
                text-center
                "
                >

                    <HiShieldCheck
                    className="
                    mx-auto
                    text-3xl
                    text-green-600
                    "
                    />


                    <p className="mt-3 font-semibold">

                        {item}

                    </p>


                    <span className="text-green-600 text-sm">

                        Online

                    </span>


                </div>


            ))
            }


            </div>


        </div>




        <div className="
        mt-10
        text-center
        text-gray-500
        text-sm
        pb-8
        ">
        </div>
    </MainLayout>

    );

}