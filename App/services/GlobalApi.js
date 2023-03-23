// showLastCommitMessageForThisLibrary.js
import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "?country=us&apiKey=f9bfd1c59689488fa35a0696862efe70";

const getTopHeadline = api.get("/top-headlines" + apiKey);

const getByCategory = (category) =>
  api.get(
    "/everything?q=" + category + "&apiKey=f9bfd1c59689488fa35a0696862efe70"
  );

export default {
  getTopHeadline,
  getByCategory,
};

// https://newsapi.org/v2/top-headlines?country=us&apiKey=f9bfd1c59689488fa35a0696862efe70
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=f9bfd1c59689488fa35a0696862efe70
