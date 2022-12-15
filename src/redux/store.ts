import { createStore, applyMiddleware, AnyAction } from "redux";
import rootReducer from "./root.reducer";
import {createLogger} from "redux-logger";
import thunk, {ThunkAction}from "redux-thunk";
import { RootState } from "../types";

const logger = createLogger({
    collapsed: true
})
// export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType=void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
