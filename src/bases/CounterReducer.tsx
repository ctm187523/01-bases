import { useReducer, useState } from "react"


export const CounterReducerComponent = () => {

    interface CounterState {
        counter: number,
        previous: number,
        changes: number
    }

    //hacemios que el INITIAL_STATE sea de tipo CounterState
    const INITIAL_STATE: CounterState = {
        counter: 0,
        previous: 0,
        changes: 0
    }

    //definimos el action del counterReducer de la funcion counterReducer de abajo
    type CounterAction =
        | { type: 'increaseBy', payload: { value: number; } }
        | { type: 'reset' };

    //creamos el reducer recibe dos parametros uno de tipo CounterState y otro de tipo CounterAction definidos arriba
    //devuelve un objeto de tipo CounterState ():CounterState
    const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

        //hacemos una desestructuracion del state
        const { counter, changes } = state;
        switch (action.type) {
            case 'reset':
                return {
                    counter: 0,
                    previous: 0,
                    changes: 0
                }
                break;

            case 'increaseBy':
                return{
                    counter: counter + action.payload.value,
                    previous: counter,
                    changes: changes +1     
                }

            default:
                return state;
        }
    }

    //use Reducer es una funcion pura(ver en google funcion pura)
    const [ counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {

        //usamos el dispatch del useReducer para realizar las funciones
        dispatch( { type: 'reset' })
    }

    const increaseBy = ( value:number) => {

        //usamos el dispatch del useReducer para realizar las funciones
        dispatch( { type: 'increaseBy', payload: { value: value } } )

    }

    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>
                { JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={ ()=> increaseBy(1) }>
                +1
            </button>
            <button onClick={ () =>increaseBy(5) }>
                +5
            </button>
            <button onClick={ () => increaseBy(10) }>
                +10
            </button>
            {/* se podria poner al no mandar parametros onClick={ handleReset } */}
            <button onClick={ () => handleReset() } > 
                reset
            </button>
        </>
    )
}
