import { useState } from "react"

//usamos la interface para crear las props que definen el tipo que tiene de dato que tiene que recibir
//podemos poner el interrogante para indicar que es opcional el initialValue que seria el valor que recibe del
//componente App.tsx y ponemos por defecto initialValue = 0 en caso de no recibir nada del App.tsx
interface Props {
    initialValue?: number
}

export const Counter = ( { initialValue = 0 }: Props) => {

    const [counter, setcounter] = useState(initialValue)

    const handleClick = () => {

        //cogemos el valor anterior(prev) y sumamos uno
        setcounter( (prev) => prev +1 );
    }

    return (
        <>
            <h1>Counter: { counter } </h1>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
