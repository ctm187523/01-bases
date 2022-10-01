import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    //hemos usado el hook creado por nosotros useCounter para manejar la logica
    //como parametros pasamos un objeto indicandole el valor maxCount que queremos
    const { counter, elementToAnimate, handleClick} = useCounter( {
        maxCount: 15
    });

    return (
        <>
            <h1>CounterHook:</h1>
            {/* usamos la referencia del hook useRef declarado arriba */}
            <h2 ref={ elementToAnimate }> {counter} </h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
