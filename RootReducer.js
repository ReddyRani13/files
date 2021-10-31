import { combineReducers } from 'redux';
import { FormReducer } from './React/Forms/FormReducer';
import { IncrementReducer } from './React/Count/IncrementReducer';
import { CounterReducer } from '../Redux/Count/CounterReducer';
import { PracticeReducer } from '../Redux/Count/Practice/PracticeReducer';


const RootReducer = combineReducers({
    root: FormReducer,
    increase: IncrementReducer,
    Counter: CounterReducer,
    Counterp: PracticeReducer,
})
export default RootReducer;