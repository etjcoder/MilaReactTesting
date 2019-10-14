import axios from "axios";

export default {
    getCategories: function() {
        return axios.get("/api/admin/category")
    },
    saveCaption: function(data) {
        return axios.post("/api/admin/captions", data);
    },
    saveCategory: function(data) {
        return axios.post("/api/admin/category", data);
    },
    getCaptions: function() {
        return axios.get("/api/admin/captions")
    },
    updateCaption: function(id, data) {
        return axios.put("/api/admin/captions/" + id, data);
    }

}