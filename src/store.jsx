import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxPromise from "redux-promise";
import singInReducer from "./screens/SignIn/SingInReducer";
import SignUpReducer from "./screens/SignUp/SignUpReducer";

const reducers = combineReducers({
  signIn: singInReducer,
  signUp: SignUpReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;
