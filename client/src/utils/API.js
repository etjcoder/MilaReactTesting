import axios from "axios";

var BASEURL = 'https://www.googleapis.com/books/v1/volumes?q='
var APIKEY = '&key=AIzaSyDNS2op_Ce00hAvNB-o2wam28IBeq8dCZg'


export default {

    randomBooks: function() {
        return axios.get(BASEURL + "Apple" + APIKEY);
    },
    searchBooks: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    },
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
}