import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../Redux/Count/sagas/saga1";
//import TyReducer from "./Trial/Tyreducer";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(RootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)




export default store