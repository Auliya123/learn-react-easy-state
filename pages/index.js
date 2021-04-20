import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";

import { store, getArticles } from "../easyState/store/index";

const IndexPage = () => {
  useEffect(() => {
    getArticles();
  }, []);
  console.log(store.loadingArticles);

  return (
    <>
      <style jsx>
        {`
          .article {
            margin-bottom: 5px;
          }
          .article a {
            margin-right: 5px;
          }
          .wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            grid-auto-rows: minmax(100px, auto);
          }
          .left-col {
            grid-column: 1 / 2;
            grid-row: 1;
          }
          .right-col {
            grid-column: 2/4;
            grid-row: 1;
          }
        `}
      </style>
      <div className="wrapper">
        <div className="left-col">
          {store.loadingArticles ? (
            <span>Loading...</span>
          ) : (
            store.articles.map((article) => (
              <div className="article" key={article.url}>
                <a href="#">{article.title}</a>
                <span>{article.score}</span>
              </div>
            ))
          )}
        </div>
        <div className="right-col">Content disini</div>
      </div>
    </>
  );
};

export default view(IndexPage);
