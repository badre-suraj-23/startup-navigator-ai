import { useState, useEffect } from "react";

export default function ArticleModal({

    open,
    onClose,
    onSave,
    article

}) {

    const [form, setForm] = useState({

        title: "",

        slug: "",

        category: "",

        content: ""

    });

    useEffect(() => {

        if (article) {

            setForm(article);

        } else {

            setForm({

                title: "",

                slug: "",

                category: "",

                content: ""

            });

        }

    }, [article]);

    if (!open) return null;

    return (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">

            <div className="bg-white rounded-xl w-full max-w-2xl p-6">

                <h2 className="text-2xl font-bold mb-6">

                    {article ? "Edit Article" : "New Article"}

                </h2>

                <input

                    className="border p-3 rounded w-full mb-3"

                    placeholder="Title"

                    value={form.title}

                    onChange={(e)=>setForm({...form,title:e.target.value})}

                />

                <input

                    className="border p-3 rounded w-full mb-3"

                    placeholder="Slug"

                    value={form.slug}

                    onChange={(e)=>setForm({...form,slug:e.target.value})}

                />

                <input

                    className="border p-3 rounded w-full mb-3"

                    placeholder="Category"

                    value={form.category}

                    onChange={(e)=>setForm({...form,category:e.target.value})}

                />

                <textarea

                    rows="8"

                    className="border p-3 rounded w-full"

                    placeholder="Content"

                    value={form.content}

                    onChange={(e)=>setForm({...form,content:e.target.value})}

                />

                <div className="flex justify-end gap-3 mt-6">

                    <button

                        onClick={onClose}

                        className="px-5 py-2 border rounded"

                    >

                        Cancel

                    </button>

                    <button

                        onClick={()=>onSave(form)}

                        className="bg-blue-600 text-white px-6 py-2 rounded"

                    >

                        Save

                    </button>

                </div>

            </div>

        </div>

    );

}