import axios from "axios";

const APIKey = "15565209-b4bbe5dc966d6e44c995f19c5";

// eslint-disable-next-line
export default {
  searchTerms: function(query) {
    return axios.get(
      `https://pixabay.com/api/?key=${APIKey}&q==${query}&image_type=photo&orientation=horizontal`
    );
  }
};
