import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import ArticleModal from "../components/ArticleModal";

import {
    getArticles,
    createArticle,
    updateArticle,
    deleteArticle,
} from "../services/articleService";

export default function Articles() {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const [open, setOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    const loadArticles = async () => {

        try {

            setLoading(true);

            const data = await getArticles();

            setArticles(data);

        } catch (err) {

            console.error(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadArticles();

    }, []);

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this article?")) return;

        try {

            await deleteArticle(id);

            loadArticles();

        } catch (err) {

            console.error(err);

        }

    };

    const handleSave = async (data) => {

        try {

            if (editing) {

                await updateArticle(editing.id, data);

            } else {

                await createArticle(data);

            }

            setOpen(false);

            setEditing(null);

            loadArticles();

        } catch (err) {

            console.error(err);

        }

    };

    return (

        <MainLayout>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">

                <h1 className="text-3xl font-bold">

                    📚 Articles

                </h1>

                <button

                    onClick={() => {

                        setEditing(null);

                        setOpen(true);

                    }}

                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"

                >

                    + New Article

                </button>

            </div>

            {

                loading ? (

                    <div className="text-center py-20">

                        Loading...

                    </div>

                ) : articles.length === 0 ? (

                    <div className="bg-white rounded-xl shadow p-10 text-center">

                        <h2 className="text-2xl font-bold">

                            No Articles Found

                        </h2>

                        <p className="text-gray-500 mt-3">

                            Create your first article.

                        </p>

                    </div>

                ) : (

                    <div className="grid gap-5">

                        {

                            articles.map((article) => (

                                <div

                                    key={article.id}

                                    className="bg-white rounded-xl shadow p-5"

                                >

                                    <h2 className="text-2xl font-bold">

                                        {article.title}

                                    </h2>

                                    <p className="text-blue-600 text-sm mt-1">

                                        {article.category}

                                    </p>

                                    <p className="text-gray-600 mt-3">

                                        {article.content}

                                    </p>

                                    <div className="flex gap-3 mt-5">

                                        <button

                                            onClick={() => {

                                                setEditing(article);

                                                setOpen(true);

                                            }}

                                            className="bg-green-600 text-white px-4 py-2 rounded"

                                        >

                                            Edit

                                        </button>

                                        <button

                                            onClick={() => handleDelete(article.id)}

                                            className="bg-red-600 text-white px-4 py-2 rounded"

                                        >

                                            Delete

                                        </button>

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                )

            }

            <ArticleModal

                open={open}

                article={editing}

                onClose={() => {

                    setOpen(false);

                    setEditing(null);

                }}

                onSave={handleSave}

            />

        </MainLayout>

    );

}
