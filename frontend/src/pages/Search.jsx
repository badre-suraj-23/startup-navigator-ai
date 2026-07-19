import { useState, useRef, useEffect } from "react";

import MainLayout from "../layouts/MainLayout";

import ChatBubble from "../components/ChatBubble";
import ChatInput from "../components/ChatInput";
import LoadingBubble from "../components/LoadingBubble";
import HistorySidebar from "../components/HistorySidebar";

import { searchAI } from "../services/searchService";
import { uploadDocument } from "../services/uploadService";

import { useDropzone } from "react-dropzone";

import {
    HiSparkles,
    HiOutlineLightBulb,
} from "react-icons/hi";



export default function Search() {


    const [messages,setMessages] = useState([]);

    const [query,setQuery] = useState("");

    const [loading,setLoading] = useState(false);


    // Upload

    const [file,setFile] = useState(null);

    const [uploading,setUploading] = useState(false);

    const [uploadMessage,setUploadMessage] = useState("");



    const bottomRef = useRef(null);



    useEffect(()=>{

        bottomRef.current?.scrollIntoView({

            behavior:"smooth"

        });


    },[messages,loading]);





    // =====================
    // DROPZONE
    // =====================


    const onDrop=(acceptedFiles)=>{

        const selectedFile = acceptedFiles[0];


        if(selectedFile){

            setFile(selectedFile);

            setUploadMessage("");

        }

    };



    const {
        getRootProps,
        getInputProps,
        isDragActive

    } = useDropzone({

        onDrop,

        accept:{

            "application/pdf":[
                ".pdf"
            ],

            "text/plain":[
                ".txt"
            ]

        },

        multiple:false

    });





    const handleUpload = async()=>{


        if(!file)
            return;



        try{


            setUploading(true);


            const res = await uploadDocument(file);



            setUploadMessage(

                `${res.filename} uploaded successfully`

            );


            setFile(null);


        }
        catch(error){


            console.log(error);


            setUploadMessage(
                "Upload failed"
            );


        }
        finally{


            setUploading(false);


        }


    };







    // =====================
    // SEARCH
    // =====================


    const handleSearch = async()=>{


        if(!query.trim() || loading)
            return;



        const question=query;



        setMessages(prev=>[

            ...prev,

            {

                role:"user",

                message:question

            }

        ]);



        setQuery("");

        setLoading(true);



        try{


            const res = await searchAI(question);



            setMessages(prev=>[

                ...prev,

                {

                    role:"assistant",

                    message:res.answer

                }

            ]);



        }
        catch(err){


            setMessages(prev=>[

                ...prev,

                {

                    role:"assistant",

                    message:
                    "Sorry, something went wrong."

                }

            ]);


        }
        finally{

            setLoading(false);

        }


    };






    // =====================
    // HISTORY
    // =====================


    const handleSelectHistory=(item)=>{


        setMessages([

            {

                role:"user",

                message:item.question

            },

            {

                role:"assistant",

                message:item.answer

            }

        ]);

    };






return (

<MainLayout showFooter={false}>


<div className="max-w-7xl mx-auto">


<div className="
flex
flex-col
lg:flex-row
gap-6
items-start
">






{/* LEFT SIDEBAR */}

<div className="
w-full
lg:w-80
space-y-5
">



{/* History */}


<div className="
bg-white
rounded-2xl
shadow
border
p-3
">


<HistorySidebar

onSelectHistory={handleSelectHistory}

/>


</div>






{/* Upload */}


<div className="
bg-white
rounded-2xl
shadow
border
p-5
">



<h2 className="
font-bold
text-lg
mb-4
">

📂 Upload Document

</h2>





<div

{...getRootProps()}

className={`

border-2
border-dashed
rounded-xl
p-6
text-center
cursor-pointer
transition


${
isDragActive

?

"border-blue-600 bg-blue-50"

:

"border-gray-300 hover:bg-gray-50"

}

`}

>


<input {...getInputProps()} />


<div className="text-3xl">

📄

</div>



<p className="
font-semibold
mt-3
">

Drag & Drop PDF / TXT

</p>


<p className="
text-gray-500
text-sm
mt-1
">

Upload document and ask AI

</p>


</div>





{
file && (

<div className="
mt-4
border
rounded-xl
p-3
">


<p className="
text-sm
truncate
">

📄 {file.name}

</p>




<button

onClick={handleUpload}

disabled={uploading}

className="
mt-3
w-full
bg-blue-600
hover:bg-blue-700
text-white
py-2
rounded-lg
"

>


{
uploading
?
"Uploading..."
:
"Upload"
}


</button>


</div>

)
}





{
uploadMessage && (

<p className="
text-green-600
text-sm
mt-3
font-medium
">

✅ {uploadMessage}

</p>

)
}



</div>




</div>









{/* CHAT AREA */}


<div className="
flex-1
w-full
">





{/* Chat Window */}


<div className="
bg-white
border
rounded-3xl
shadow-xl
h-[calc(100vh-180px)]
min-h-[600px]
overflow-y-auto
p-6
space-y-8
">





{
messages.length===0 && (


<div className="
h-full
flex
flex-col
justify-center
items-center
text-center
">


<div className="
w-24
h-24
rounded-full
bg-blue-100
flex
items-center
justify-center
text-5xl
">


<HiSparkles
className="
text-blue-600
"
/>


</div>




<h2 className="
text-3xl
font-bold
mt-8
">

Welcome to Startup AI

</h2>




<p className="
text-gray-500
mt-3
max-w-xl
">

Ask questions or upload documents
to search with AI.

</p>






<div className="
grid
md:grid-cols-2
gap-4
mt-8
w-full
max-w-xl
">



<button

onClick={()=>setQuery(
"How to register a startup in India?"
)}

className="
border
rounded-xl
p-4
text-left
hover:bg-blue-50
"

>


<HiOutlineLightBulb
className="
text-blue-600
text-2xl
mb-2
"
/>


Startup Registration


</button>






<button

onClick={()=>setQuery(
"How to raise funding?"
)}

className="
border
rounded-xl
p-4
text-left
hover:bg-green-50
"

>


<HiOutlineLightBulb
className="
text-green-600
text-2xl
mb-2
"
/>


Funding


</button>




</div>


</div>


)

}






{
messages.map((msg,index)=>(


<ChatBubble

key={index}

role={msg.role}

message={msg.message}

/>


))

}






{
loading && <LoadingBubble/>

}



<div ref={bottomRef}/>


</div>






{/* INPUT */}


<div className="mt-5">


<ChatInput

value={query}

onChange={setQuery}

onSend={handleSearch}

loading={loading}

/>


</div>




</div>




</div>


</div>



</MainLayout>


);


}