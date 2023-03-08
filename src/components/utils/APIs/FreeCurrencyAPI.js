import axios from "axios";
import config from "../../../config.json";

// eslint-disable-next-line
export default {
  searchTerms: function(base, currencies) {
    return axios.get(
      `https://api.freecurrencyapi.com/v1/latest?base_currency=${base}&currencies=${currencies}`,
      {headers: {
        "apikey": config.currencyAPI_KEY
      }}
    );
  }
};
