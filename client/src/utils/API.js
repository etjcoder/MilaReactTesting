import axios from "axios";

export default {
    getCategories: function() {
        return axios.get("/api/admin/category")
    },
    saveCaption: function(data) {
        return axios.post("/api/admin/captions", data);
    },
    saveCommunityCaption: function(data) {
        return axios.post("/api/user/captions", data);
    },
    saveCategory: function(data) {
        return axios.post("/api/admin/category", data);
    },
    getCaptions: function() {
        return axios.get("/api/admin/captions")
    },
    getUserCaptions: function(user) {
        return axios.get("/api/user/captions/" + user)
    },
    getFeaturedCaptions: function() {
        return axios.get("/api/admin/captions/featured")
    },
    updateCaption: function(id, data) {
        return axios.put("/api/admin/captions/" + id, data);
    },
    deleteCaption: function(id) {
        return axios.delete("/api/admin/captions/" + id);
    },
    featureCaption: function(id) {
        return axios.post("/api/admin/captions/" + id);
    },
    unfeatureCaption: function(id) {
        return axios.put("/api/admin/captions/featured/" + id)
    }
}