import { store as createStore } from "@risingstack/react-easy-state";

const topArticlesUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
const generateItemUrl = (id) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const store = createStore({
  //basic data structure
  articles: [],
  currentArticle: false,
  comments: [],
  loadingArticles: false,
  loadingComments: false,
  comments: []
});

//methods
export const getArticles = async () => {
  store.loadingArticles = true;
  const articleIds = await fetch(topArticlesUrl).then((r) => r.json());
  store.articles = await Promise.all(
    articleIds
      .slice(0, 10)
      .map((id) => generateItemUrl(id))
      .map((url) => fetch(url).then((r) => r.json()))
  );
  store.loadingArticles = false;
};

export const currentComment = async (article) => {
  store.loadingComments = true;
  store.currentArticles = article;
  store.currentArticles.comments = await Promise.all(
    store.currentArticles.kids
      .map((id) => generateItemUrl(id))
      .map((url) => fetch(url).then((r) => r.json()))
  );
  store.loadingComments = false;
};
