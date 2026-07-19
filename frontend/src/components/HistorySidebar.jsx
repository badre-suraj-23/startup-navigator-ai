import { useEffect, useState } from "react";

import {
    getHistory,
    deleteHistory,
    clearHistory,
} from "../services/historyService";

export default function HistorySidebar({

    onSelectHistory,

}) {

    const [history, setHistory] = useState([]);

    const [loading, setLoading] = useState(true);

    // ===========================
    // Load History
    // ===========================

    const loadHistory = async () => {

        try {

            const data = await getHistory();

            setHistory(data);

        } catch (err) {

            console.error(err);

        }

        setLoading(false);

    };

    useEffect(() => {

        loadHistory();

    }, []);

    // ===========================
    // Delete One
    // ===========================

    const handleDelete = async (id) => {

        try {

            await deleteHistory(id);

            setHistory((prev) =>
                prev.filter((item) => item.id !== id)
            );

        } catch (err) {

            console.error(err);

        }

    };

    // ===========================
    // Clear All
    // ===========================

    const handleClear = async () => {

        if (!window.confirm("Clear all search history?")) return;

        try {

            await clearHistory();

            setHistory([]);

        } catch (err) {

            console.error(err);

        }

    };

    return (

        <div className="w-80 bg-white rounded-xl shadow border h-[75vh] flex flex-col">

            {/* Header */}

            <div className="flex justify-between items-center p-4 border-b">

                <h2 className="font-bold text-lg">

                    Search History

                </h2>

                {

                    history.length > 0 && (

                        <button

                            onClick={handleClear}

                            className="text-red-500 text-sm hover:underline"

                        >

                            Clear

                        </button>

                    )

                }

            </div>

            {/* Body */}

            <div className="flex-1 overflow-y-auto">

                {

                    loading && (

                        <p className="text-center mt-6 text-gray-500">

                            Loading...

                        </p>

                    )

                }

                {

                    !loading && history.length === 0 && (

                        <p className="text-center mt-10 text-gray-400">

                            No Search History

                        </p>

                    )

                }

                {

                    history.map((item) => (

                        <div

                            key={item.id}

                            className="border-b p-3 hover:bg-gray-50 transition"

                        >

                            <div

                                className="cursor-pointer"

                                onClick={() => onSelectHistory(item)}

                            >

                                <h3 className="font-medium line-clamp-2">

                                    {item.question}

                                </h3>

                            </div>

                            <div className="flex justify-between items-center mt-2">

                                <span className="text-xs text-gray-400">

                                 <p className="text-xs text-gray-500">
    {new Date(item.created_at).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
    })}
</p>
                                </span>

                                <button

                                    onClick={() => handleDelete(item.id)}

                                    className="text-red-500 hover:text-red-700"

                                >

                                    🗑

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}