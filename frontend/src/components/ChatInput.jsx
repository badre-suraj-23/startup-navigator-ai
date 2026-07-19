import { HiPaperAirplane } from "react-icons/hi2";

export default function ChatInput({

    value,
    onChange,
    onSend,
    loading,

}) {

    const handleKeyDown = (e) => {

        if (e.key === "Enter" && !e.shiftKey) {

            e.preventDefault();

            if (!loading && value.trim()) {

                onSend();

            }

        }

    };

    return (

        <div className="bg-white border rounded-2xl shadow-lg p-4">

            <div className="flex items-end gap-3">

                <textarea

                    rows={1}

                    autoFocus

                    value={value}

                    placeholder="Ask Startup AI anything..."

                    onChange={(e) => onChange(e.target.value)}

                    onKeyDown={handleKeyDown}

                    className="flex-1 resize-none rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"

                />

                <button

                    onClick={onSend}

                    disabled={loading || !value.trim()}

                    className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white flex items-center justify-center transition"

                >

                    {

                        loading ?

                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

                            :

                            <HiPaperAirplane className="text-xl" />

                    }

                </button>

            </div>

            <p className="text-xs text-gray-500 mt-3">

                Press <span className="font-semibold">Enter</span> to send •
                <span className="font-semibold"> Shift + Enter</span> for a new line

            </p>

        </div>

    );

}