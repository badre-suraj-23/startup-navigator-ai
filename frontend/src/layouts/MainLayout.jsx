import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";


export default function MainLayout({ children, showFooter = true }) {


    const [menuOpen, setMenuOpen] = useState(false);


    const location = useLocation();
    const navigate = useNavigate();



    const navItems = [

        {
            name:"Dashboard",
            path:"/dashboard",
            icon:"🏠"
        },

        {
            name:"AI Search",
            path:"/search",
            icon:"🤖"
        },

        {
            name:"Articles",
            path:"/articles",
            icon:"📚"
        },

        {
            name:"Resources",
            path:"/resources",
            icon:"📖"
        }

    ];



    const handleLogout =()=>{

        localStorage.removeItem("token");

        navigate("/");

    };



    const activeClass=(path)=>{

        return location.pathname===path

        ?

        "bg-blue-100 text-blue-700"

        :

        "text-gray-600 hover:bg-gray-100";

    };



return (

<div className="
min-h-screen
flex
flex-col
bg-gray-50
">


{/* NAVBAR */}

<nav className="
bg-white
border-b
shadow-sm
sticky
top-0
z-50
">


<div className="
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
">


<div className="
h-16
flex
items-center
justify-between
">



{/* Logo */}

<Link
to="/dashboard"
className="
flex
items-center
gap-3
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
">

🚀

</div>


<div>

<h2 className="
font-bold
text-lg
text-gray-900
">

Startup AI

</h2>


<p className="
text-xs
text-gray-500
">

AI-powered startup assistant

</p>


</div>


</Link>





{/* Desktop Menu */}

<div className="
hidden
md:flex
gap-2
">


{
navItems.map((item)=>(

<Link

key={item.path}

to={item.path}

className={`
flex
items-center
gap-2
px-4
py-2
rounded-lg
text-sm
font-medium
transition
${activeClass(item.path)}
`}

>

<span>
{item.icon}
</span>

{item.name}

</Link>

))
}


</div>





{/* User */}

<div className="
hidden
md:flex
items-center
gap-3
">


<div className="
bg-gray-100
px-4
py-2
rounded-xl
text-sm
">

👤 User

</div>


<button

onClick={handleLogout}

className="
text-red-600
font-medium
hover:text-red-700
"

>

Logout

</button>


</div>





{/* Mobile Button */}

<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
md:hidden
text-3xl
"

>

☰

</button>



</div>


</div>





{/* Mobile Menu */}

{
menuOpen && (

<div className="
md:hidden
border-t
bg-white
">


<div className="
p-4
space-y-2
">


{
navItems.map((item)=>(


<Link

key={item.path}

to={item.path}

onClick={()=>setMenuOpen(false)}

className={`
flex
items-center
gap-3
px-4
py-3
rounded-lg
${activeClass(item.path)}
`}

>


{item.icon}

{item.name}


</Link>


))
}




<button

onClick={handleLogout}

className="
w-full
text-left
px-4
py-3
rounded-lg
text-red-600
hover:bg-red-50
"

>

Logout

</button>



</div>


</div>

)
}


</nav>





{/* PAGE CONTENT */}

<main className="
flex-1
w-full
max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8
py-8
">


{children}


</main>





{/* FOOTER */}

{
    showFooter && <Footer />
}



</div>

);


}