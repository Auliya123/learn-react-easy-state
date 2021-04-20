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
  store.articles = await Promise.all(
    articleIds
      .slice(0, 10)
      .map((id) => generateItemUrl(id))
      .map((url) => fetch(url).then((r) => r.json()))
  );
};
