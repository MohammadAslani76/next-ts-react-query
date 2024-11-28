"use client"

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "@/redux/counterSlice";
import { RootState } from "@/redux/store";

export default function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <br />
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <br />
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
            <br />
            <p>{count}</p>
        </div>
    )
}
