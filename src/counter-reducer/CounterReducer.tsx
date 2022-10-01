import { useReducer } from "react"
import { doReset, doIncreaseBy } from './actions/actions';
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";



//hacemios que el INITIAL_STATE sea de tipo CounterState importado arriba
const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
}


export const CounterReducerComponent = () => {

    //use Reducer es una funcion pura(ver en google funcion pura), importaos arriva el reducer counterReducer
    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {

        //usamos el dispatch del useReducer para realizar las funciones
        //usamos el doReset creado en la carpeta actions/actions.ts
        dispatch( doReset() );
    }

    const increaseBy = (value: number) => {

        //usamos el dispatch del useReducer para realizar las funciones
        //usamos el doIncreaseBy creado en la carpeta actions/actions.ts
        dispatch( doIncreaseBy( value ) );

    }

    return (
        <>
            <h1>Counter Reducer Segmentado</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={() => increaseBy(1)}>
                +1
            </button>
            <button onClick={() => increaseBy(5)}>
                +5
            </button>
            <button onClick={() => increaseBy(10)}>
                +10
            </button>
            {/* se podria poner al no mandar parametros onClick={ handleReset } */}
            <button onClick={() => handleReset()} >
                reset
            </button>
        </>
    )
}
