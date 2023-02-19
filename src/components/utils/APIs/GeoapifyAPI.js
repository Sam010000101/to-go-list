import axios from "axios";

const GEOAPIFY_API_KEY = "33b4af2cef534bd6b626019b07159028";
const categories = [
  "tourism.attraction"
]; 

// This uses the Places endpoint. We're accessing the autocomplete endpoint via the geocoder-autocomplete node library
// eslint-disable-next-line
export default {
  // query is the place_id returned by the autocomplete endpoint
  searchTerms: function (query) {
    return axios.get(
      `https://api.geoapify.com/v2/places?categories=${categories.toString()}&filter=place:${query}&apiKey=${GEOAPIFY_API_KEY}`
      );
  }
};
