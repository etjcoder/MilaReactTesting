import axios from "axios";

export default {
    getCategories: function() {
        return axios.get("/api/admin/category")
    },
    saveCaption: function(data) {
        return axios.post("/api/admin/captions/", data);
    },
    saveCommunityCaption: function(id, data) {
        return axios.post("/api/user/captions/" + id, data);
    },
    saveCategory: function(data) {
        return axios.post("/api/admin/category", data);
    },
    saveCaptionRequest: function(data) {
        return axios.post("/api/user/request", data);
    },
    saveCaptionSuggestion: function(id, data) {
        return axios.post("/api/user/suggestion/" + id, data);
    },
    getCaptions: function() {
        return axios.get("/api/admin/captions")
    },
    getRequests: function() {
        return axios.get("/api/user/request")
    },
    getSuggestions: function(id) {
        return axios.get("/api/user/suggestion/" + id)
    },
    getUserCaptions: function(id) {
        return axios.get("/api/user/captions/" +id)
    },
    searchByKeyword: function(keyword) {
        return axios.get("/api/user/search/keyword/" + keyword)
    },
    searchByCategory: function(category) {
        return axios.get("/api/user/search/category/" + category)
    },
    getFeaturedCaptions: function() {
        return axios.get("/api/admin/captions/featured")
    },
    updateCaption: function(id, data) {
        return axios.put("/api/admin/captions/" + id, data);
    },
    updateUserCaption: function(id, data) {
        return axios.put("/api/user/captions/" + id, data);
    },
    deleteCaption: function(id) {
        return axios.delete("/api/admin/captions/" + id);
    },
    deleteUserCaption: function(id) {
        return axios.delete("/api/user/captions/" + id);
    },
    featureCaption: function(id) {
        return axios.post("/api/admin/captions/" + id);
    },
    unfeatureCaption: function(id) {
        return axios.put("/api/admin/captions/featured/" + id)
    },
    createUser: function(data) {
        return axios.post("/api/user/data", data)
    },
    getUserData: function(id) {
        return axios.get("/api/user/data/" + id)
    },
    updateUser: function(id, data) {
        return axios.put("/api/user/data/" + id, data)
    }
}