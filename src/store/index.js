import { createStore,applyMiddleware} from 'redux';
import reducer from "./reducer";
import state from "./state";
import trunk from "redux-thunk"
//实例化全局状态
let store = createStore(
  reducer,
  state,
  applyMiddleware(trunk)
// redux的middleware是对action进行扩展处理，这样丰富了应用需求。
);

export default store;