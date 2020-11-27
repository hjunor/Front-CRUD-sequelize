import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxPromise from "redux-promise";
import singInReducer from "./screens/SignIn/SigninReducer";

const reducers = combineReducers({
  signIn: singInReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
