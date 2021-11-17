import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

/* eslint-disable no-underscore-dangle */
export default createStore(
	rootReducer,
	process.env.NODE_ENV === "development" &&
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__()
);
