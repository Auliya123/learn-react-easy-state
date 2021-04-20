import { store as createStore } from "@risingstack/react-easy-state";

const topArticlesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
const generateItemUrl = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const store = createStore({
  //basic data structure
  articles: [],
  currentArticle: false,
  comments: []
});

//methods
export const getArticles = async () => {
  const articleIds = await fetch(topArticlesUrl).then((r) => r.json());
  store.articles = articleIds;
};
