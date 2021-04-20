import { store as createStore } from "@risingstack/react-easy-state";

const store = createStore({
  num: 3,
  increment: () => store.num++
});

export default store;
