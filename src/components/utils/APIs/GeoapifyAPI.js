import axios from "axios";

const GEOAPIFY_API_KEY = "33b4af2cef534bd6b626019b07159028";
const categories = [
  // "accommodation",
  // "commercial.department_store",
  // "commercial.outdoor_and_sport",
  // "catering.restaurant",
  // "catering.cafe",
  // "catering.bar",    
  // "catering.pub" ,   
  // "catering.ice_cream",
  "entertainment.culture",
  // "entertainment.museum",
  // "leisure.spa",
  // "leisure.park" ,   
  // "leisure.park.garden" ,    
  // "leisure.park.nature_reserve",
  // "natural",
  // "rental.car",
  // "rental.bicycle",
  // "tourism",
  // "adult.nightclub"
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
