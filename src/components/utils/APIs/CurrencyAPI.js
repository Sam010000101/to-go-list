import axios from "axios";

const APIKey = "d1b4ba60495ff65ebff627bf";

export default {
  searchTerms: function(query) {
    return axios.get(
        `https://v6.exchangerate-api.com/v6/${APIKey}/latest/${query}`
    );
  }
};