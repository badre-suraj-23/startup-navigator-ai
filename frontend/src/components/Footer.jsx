export default function Footer() {

    return (

        <footer className="bg-white border-t mt-10">


            <div className="
            max-w-7xl 
            mx-auto 
            px-4 
            py-8
            text-center
            ">


                {/* Profile Image */}

                <img
                    src="/suraj-profile.jpeg"
                    alt="Suraj Badre Patil"
                    className="
                    w-20
                    h-20
                    rounded-full
                    mx-auto
                    object-cover
                    border-4
                    border-blue-100
                    "
                />



                {/* Developer Name */}

                <h3 className="
                mt-4
                text-xl
                font-bold
                text-gray-800
                ">

                    Developed by Suraj Badre Patil

                </h3>



                <p className="
                mt-2
                text-gray-500
                text-sm
                ">

                    Python Backend Developer | FastAPI | Django | Generative AI

                </p>



                {/* Links */}

                <div className="
                flex
                flex-col
                sm:flex-row
                justify-center
                items-center
                gap-4
                mt-5
                ">


                    <a
                    href="https://www.linkedin.com/in/suraj-badre/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-blue-600
                    hover:underline
                    "
                    >

                        LinkedIn

                    </a>



                    <a
                        href="mailto:surajbadre.dev@gmail.com"
                        className="
                        text-red-600
                        hover:underline
                        "
                    >
                        ✉️ surajbadre.dev@gmail.com
                    </a>



                    <a
                    href="https://github.com/badre-suraj-23/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    text-gray-800
                    hover:underline
                    "
                    >

                        GitHub

                    </a>


                </div>



                <p className="
                mt-6
                text-sm
                text-gray-400
                ">

                    Built with ❤️ using FastAPI • React • PostgreSQL • ChromaDB • Groq

                </p>



                <p className="
                mt-2
                text-sm
                text-gray-400
                ">

                    © 2026 Startup Navigator AI

                </p>


            </div>


        </footer>

    );

}