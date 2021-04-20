import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";

import { store, getArticles } from "../easyState/store/index";

const IndexPage = () => {
  useEffect(() => {
    getArticles();
  });
  return <pre>{JSON.stringify(store.articles)}</pre>;
};

export default view(IndexPage);
