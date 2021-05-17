import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import "./counter.css"

export const CounterWithCustomHook = () => {

    const {state, increment, reset, decrement} = useCounter(500)

    return (
        <>
            <h1>Counter With Hook: {state}</h1>
            <hr/>


            <button className='btn' onClick = {() => increment(1)}> +1 </button>
            <button className='btn' onClick = {() => decrement(1)}> -1 </button>
            <button className='btn' onClick = {reset}> Reset </button>
        </>
    )
}
