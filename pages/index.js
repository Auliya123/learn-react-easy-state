import React from "react";
import { view } from "@risingstack/react-easy-state";

import store from "../easyState/store/index";

export default view(() => (
  <button onClick={store.increment}>{store.num}</button>
));
