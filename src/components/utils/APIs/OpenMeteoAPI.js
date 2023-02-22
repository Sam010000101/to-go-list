import axios from "axios";


const lastYear = new Date().getFullYear() - 1;

// eslint-disable-next-line
export default {
  searchTerms: function(lat, lon) {
    return axios.get(
      `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=2022-01-01&end_date=${lastYear}-12-31&daily=temperature_2m_mean,precipitation_sum&timezone=auto`
    );
  }
};
