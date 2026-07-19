import api from "../api/api";

export const searchAI = async (query) => {

    const response = await api.post(
        "/search/",
        {
            query,
        }
    );

    return response.data;

};