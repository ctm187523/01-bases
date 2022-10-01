import { useState } from "react"

//usamos la interface para crear las props que definen el tipo que tiene de dato que tiene que recibir
//podemos poner el interrogante para indicar que es opcional el initialValue que seria el valor que recibe del
//componente App.tsx y ponemos por defecto initialValue = 5 en caso de no recibir nada del App.tsx
interface Props {
    initialValue?: number;
}

//creamos la interfaz CounterState para tipar el counterState
interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

    //usamos un objeto como estado inicial del useState y usamos entre <>
    //para tipar el counterState
    //desestructuramos el counterState(que seria el primer parametro del useState)
    const [{ counter, clicks }, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    });



    //ponemos el parametro recibido que es de tipo number
    const handleClick = (value: number) => {

        //retornamos un objeto en la funcion de flecha la sintaxis es ({})
        //añadimos al counter el valor recibido por parametro y al clicks uno
        //para contar el numero de clicks efectuados
        setCounterState(({ counter, clicks }) => ({ //desestructuramos el counterState
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

    return (
        <>
            <h1>CounterBy: {counter} </h1>
            <h1>Clicks: {clicks} </h1>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
