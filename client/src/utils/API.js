import axios from "axios";



export default {

    // randomBooks: function() {
    //     return axios.get(BASEURL + "Apple" + APIKEY);
    // },
    // searchBooks: function(query) {
    //     return axios.get(BASEURL + query + APIKEY);
    // },
    // getSavedBooks: function() {
    //     return axios.get("/api/books");
    // },
    // saveBook: function(bookData) {
    //     return axios.post("/api/books", bookData);
    // },
    // deleteBook: function(id) {
    //     return axios.delete("/api/books/" + id);
    // },
    getCaptions: function() {
        return axios.get("/api/admin/captions");
    },
    getCategories: function() {
        return axios.get("/api/admin/category")
    }

}