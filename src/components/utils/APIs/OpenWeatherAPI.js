import axios from "axios";

const APIKey = "a0aca8a89948154a4182dcecc780b513";

export default {
  searchTerms: function(query) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${APIKey}`
    );
  }
};
