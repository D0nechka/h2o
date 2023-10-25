import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux';
import { decrement, increment, incrementByAmount, selectCount } from 'src/store/slices/counter/counterSlice';
import { useState } from 'react';

export const Main = () => {
    const [ value, setValue ] = useState<number>();

    const val = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncAmount = () => {
        if(!value) {
            return;
        }
        dispatch(incrementByAmount(value));
    };

    return (
        <div>
            <input type='number' value={value} onChange={(e) => setValue(+e.target.value)}></input>
            <button onClick={handleIncAmount}>сложка</button>
            <span>{val}</span>
            <button onClick={handleIncrement}> + </button>
            <button onClick={handleDecrement}> - </button>
        </div>
    );
};