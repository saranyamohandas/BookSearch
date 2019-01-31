import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+";
const APIKEY = "&key=AIzaSyBsj9UV8OWocfEcXd0k2x2ay5fOJ1IcyYk";

export default {
  search: function(query) {
    console.log("inside search " + query);
  
   return axios.get(BASEURL + query + APIKEY);
 

  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }


};
