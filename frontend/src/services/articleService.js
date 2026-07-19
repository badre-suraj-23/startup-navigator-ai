import api from "../api/api";

const getAuthHeader = () => {
    const token = localStorage.getItem("token");

    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};

export const getArticles = async () => {
    const res = await api.get("/articles/");
    return res.data;
};

export const createArticle = async (data) => {
    const res = await api.post(
        "/articles/",
        data,
        getAuthHeader()
    );
    return res.data;
};

export const updateArticle = async (id, data) => {
    const res = await api.put(
        `/articles/${id}`,
        data,
        getAuthHeader()
    );
    return res.data;
};

export const deleteArticle = async (id) => {
    await api.delete(
        `/articles/${id}`,
        getAuthHeader()
    );
};