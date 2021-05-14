import {createStore} from 'redux';
import reducer from "./reducer";
import helloReactReducer from "./redux/reducers/bidPageReducer";

const store = createStore(helloReactReducer); // 创建仓库放入管理员

export default store;
