import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increament , decreament } from "./store/action/action";


/*
useSelector is a React-Redux hook that lets your React
component access data from the Redux store.
<button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
useDispatch is another React-Redux hook that lets your
component send actions to the Redux store.
*/


export default function Redux(){

    return (
        <div>
            <Counter/>
            <Counter2/>
        </div>
    )

}


const Counter  =() => {
    const count = useSelector((state=> state.counter.count))
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count in Counter Component: {count}</h1>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
        </div>
    )
}

const Counter2  =() => {
    const count = useSelector((state=> state.counter.count))
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Count in Counter Component: {count}</h1>
            <button onClick={() => dispatch(increament())}>+</button>
            <button onClick={() => dispatch(decreament())}>-</button>
        </div>
    )
}