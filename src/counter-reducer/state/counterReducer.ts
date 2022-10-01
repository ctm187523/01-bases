
import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";


//creamos el reducer recibe dos parametros uno de tipo CounterState y otro de tipo CounterAction importados arriba
//devuelve un objeto de tipo CounterState ():CounterState
export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    //hacemos una desestructuracion del state
    const { counter, changes } = state;
    switch (action.type) {
        case 'resetear':
            return {
                counter: 0,
                previous: 0,
                changes: 0
            }
            break;

        case 'increaseBy':
            return {
                counter: counter + action.payload.value,
                previous: counter,
                changes: changes + 1
            }

        default:
            return state;
    }

}