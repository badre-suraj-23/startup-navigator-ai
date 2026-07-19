import api from "../api/api";

// ==========================================
// Get Search History
// ==========================================

export const getHistory = async () => {
    const response = await api.get("/history");
    return response.data;
};

// ==========================================
// Delete One History
// ==========================================

export const deleteHistory = async (historyId) => {
    const response = await api.delete(`/history/${historyId}`);
    return response.data;
};

// ==========================================
// Clear All History
// ==========================================

export const clearHistory = async () => {
    const response = await api.delete("/history");
    return response.data;
};