import ReactMarkdown from "react-markdown";
import { HiOutlineClipboard, HiCheck } from "react-icons/hi";
import { useState } from "react";

export default function ChatBubble({ role, message }) {

    const [copied, setCopied] = useState(false);

    const copyText = async () => {

        await navigator.clipboard.writeText(message);

        setCopied(true);

        setTimeout(() => {

            setCopied(false);

        }, 2000);

    };

    const isUser = role === "user";

    return (

        <div
            className={`flex ${
                isUser ? "justify-end" : "justify-start"
            }`}
        >

            <div
                className={`max-w-[80%] rounded-2xl px-5 py-4 shadow-md ${
                    isUser
                        ? "bg-blue-600 text-white"
                        : "bg-white border border-gray-200"
                }`}
            >

                {/* Header */}

                <div className="flex justify-between items-center mb-3">

                    <div className="flex items-center gap-2">

                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                                isUser
                                    ? "bg-blue-500"
                                    : "bg-gray-100"
                            }`}
                        >

                            {isUser ? "👤" : "🤖"}

                        </div>

                        <span className="font-semibold">

                            {isUser ? "You" : "Startup AI"}

                        </span>

                    </div>

                    {!isUser && (

                        <button
                            onClick={copyText}
                            className="text-gray-500 hover:text-blue-600 transition"
                        >

                            {copied ? (

                                <HiCheck className="text-green-600 text-xl" />

                            ) : (

                                <HiOutlineClipboard className="text-xl" />

                            )}

                        </button>

                    )}

                </div>

                {/* Message */}

                <div
                    className={`prose max-w-none ${
                        isUser
                            ? "prose-invert"
                            : ""
                    }`}
                >

                    <ReactMarkdown>

                        {message}

                    </ReactMarkdown>

                </div>

            </div>

        </div>

    );

}