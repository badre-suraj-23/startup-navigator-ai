import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getCurrentUser } from "../services/authService";


export default function Navbar() {


    const navigate = useNavigate();

    const location = useLocation();


    const [open, setOpen] = useState(false);

    const [user, setUser] = useState(null);




    useEffect(() => {


        const loadUser = async () => {


            try {


                const data = await getCurrentUser();

                setUser(data);


            } catch (err) {


                console.error(err);


            }


        };


        loadUser();


    }, []);





    const logout = () => {


        localStorage.removeItem("token");

        navigate("/");


    };





    const activeClass = (path) =>

        location.pathname === path

            ? "bg-blue-100 text-blue-700 font-semibold"

            : "text-gray-700 hover:bg-gray-100 hover:text-blue-600";







    return (


        <nav className="
        sticky
        top-0
        z-50
        bg-white
        border-b
        shadow
        ">



            <div className="
            max-w-7xl
            mx-auto
            px-4
            ">



                <div className="
                flex
                justify-between
                items-center
                h-16
                ">





                    {/* Logo */}



                    <Link

                        to="/dashboard"

                        className="
                        flex
                        items-center
                        gap-3
                        flex-shrink-0
                        "

                    >


                        <div className="
                        w-10
                        h-10
                        rounded-full
                        bg-blue-600
                        flex
                        items-center
                        justify-center
                        text-white
                        text-xl
                        shadow
                        ">

                            🚀

                        </div>




                        <div>


                            <h1 className="
                            font-bold
                            text-xl
                            text-blue-600
                            ">

                                Startup AI

                            </h1>



                        </div>



                    </Link>








                    {/* Desktop Menu */}





                    <div className="
                    hidden
                    md:flex
                    items-center
                    gap-2
                    ">



                        <Link

                            to="/dashboard"

                            className={`
                            px-4
                            py-2
                            rounded-lg
                            transition
                            ${activeClass("/dashboard")}
                            `}

                        >

                            🏠 Dashboard

                        </Link>





                        <Link

                            to="/search"

                            className={`
                            px-4
                            py-2
                            rounded-lg
                            transition
                            ${activeClass("/search")}
                            `}

                        >

                            🤖 AI Search

                        </Link>





                        <Link

                            to="/articles"

                            className={`
                            px-4
                            py-2
                            rounded-lg
                            transition
                            ${activeClass("/articles")}
                            `}

                        >

                            📚 Articles

                        </Link>





                        <Link

                            to="/resources"

                            className={`
                            px-4
                            py-2
                            rounded-lg
                            transition
                            ${activeClass("/resources")}
                            `}

                        >

                            📖 Resources

                        </Link>





                    </div>









                    {/* Desktop User Section */}





                    <div className="
                    hidden
                    md:flex
                    items-center
                    gap-4
                    ">



                        <div className="
                        flex
                        items-center
                        gap-3
                        bg-gray-100
                        px-4
                        py-2
                        rounded-xl
                        ">



                            <div className="
                            w-10
                            h-10
                            rounded-full
                            bg-blue-600
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            ">


                                {
                                user?.full_name
                                ?.charAt(0)
                                .toUpperCase()
                                ||
                                "U"
                                }


                            </div>





                            <div className="leading-tight">



                                <h3 className="
                                text-sm
                                font-semibold
                                ">


                                    {
                                    user?.full_name
                                    ||
                                    "Loading..."
                                    }


                                </h3>





                                <p className="
                                text-xs
                                text-gray-500
                                ">


                                    {
                                    user?.email
                                    }


                                </p>




                            </div>




                        </div>





                        <button


                            onClick={logout}


                            className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            transition
                            "


                        >


                            Logout


                        </button>





                    </div>









                    {/* Mobile Button */}





                    <button


                        className="
                        md:hidden
                        text-3xl
                        "


                        onClick={() => setOpen(!open)}


                    >


                        ☰


                    </button>






                </div>




            </div>









            {/* Mobile Menu */}





            {


            open && (



                <div className="
                md:hidden
                border-t
                bg-white
                shadow
                ">



                    <div className="
                    flex
                    flex-col
                    p-4
                    gap-3
                    ">





                        {/* User Info */}





                        <div className="
                        flex
                        items-center
                        gap-3
                        bg-gray-100
                        rounded-xl
                        p-3
                        ">




                            <div className="
                            w-10
                            h-10
                            rounded-full
                            bg-blue-600
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            ">


                                {
                                user?.full_name
                                ?.charAt(0)
                                .toUpperCase()
                                ||
                                "U"
                                }


                            </div>




                            <div>


                                <h3 className="
                                font-semibold
                                ">

                                    {
                                    user?.full_name
                                    ||
                                    "Loading..."
                                    }


                                </h3>



                                <p className="
                                text-xs
                                text-gray-500
                                ">


                                    {
                                    user?.email
                                    }


                                </p>



                            </div>



                        </div>







                        <Link

                            to="/dashboard"

                            onClick={() => setOpen(false)}

                            className={`
                            p-3
                            rounded-lg
                            ${activeClass("/dashboard")}
                            `}

                        >

                            🏠 Dashboard

                        </Link>





                        <Link

                            to="/search"

                            onClick={() => setOpen(false)}

                            className={`
                            p-3
                            rounded-lg
                            ${activeClass("/search")}
                            `}

                        >

                            🤖 AI Search

                        </Link>





                        <Link

                            to="/articles"

                            onClick={() => setOpen(false)}

                            className={`
                            p-3
                            rounded-lg
                            ${activeClass("/articles")}
                            `}

                        >

                            📚 Articles

                        </Link>





                        <Link

                            to="/resources"

                            onClick={() => setOpen(false)}

                            className={`
                            p-3
                            rounded-lg
                            ${activeClass("/resources")}
                            `}

                        >

                            📖 Resources

                        </Link>






                        <button


                            onClick={logout}


                            className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            rounded-lg
                            py-3
                            transition
                            "


                        >


                            Logout


                        </button>





                    </div>




                </div>




            )


            }





        </nav>


    );

}