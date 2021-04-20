import React, { useEffect } from "react";
import { view } from "@risingstack/react-easy-state";

import { store, getArticles } from "../easyState/store/index";

const IndexPage = () => {
  useEffect(() => {
    getArticles();
  });
  return <pre>{JSON.stringify(store.articles, null, 2)}</pre>; //null and 2 to make data prettier
};

export default view(IndexPage);
