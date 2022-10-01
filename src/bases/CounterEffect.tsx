import { useEffect, useRef, useState } from "react";
//hemos descargado gsap con yarn add gsap para hacer animaciones lo importamos
import { gsap } from 'gsap'

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

  
    const [counter, setcounter] = useState(5);

    //usamos el hook de React useRef para crear una referencia al elemeto a animar
    //useRef al cambiar el valor no provoca un renderizado como hace el useState
    //decimos que el valor sera de tipo HTMLHeadingElement que es donde lo usaremos en la etiqueta h2 del render
    //y lo inicializamos como null
    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick = () => {

        //queremos evitar que al llegar al valor del MAXIMUN_COUNT no supere ese valor
        //usamos la funcion Math.min para indicar que trabaje en el intervalor del prev +1 y el valor del MAXIMUN_COUNT
        setcounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));

        //tambien podriamos hacerlo como esta en la linea de abajo usando
        //la condicion && que se ejecute solo si se cumple la condicion
        //counter !== MAXIMUN_COUNT && setcounter( (prev) => prev +1 );

    }

    useEffect(() => {

        if (counter < 10) return;

        //le damos estilo al console.log on %c
        console.log('%cSe llego al valor máximo', 'color:red; background-color: black;');

        //creamos un timeline, que es como la barra de los reproductores con el play stop etc, con la libreria instalada gsap para las animaciones
        const tl = gsap.timeline();

        //usamos el objeto tl creado arriba
        //decimos que el elemento h2(con la referencia realizada arriba counterElement) suba en 10, con duration decimos que la translacion dure 0,2 milesimas de segundo, 
        //con ease decimos como sera la translacion, con ease.out decimos que se desacelere al llegar al final
        tl.to( counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' });
        //con bounce.out hacemos que rebote en la salida
        tl.to( counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'});


    }, [counter])


    return (
        <>
            <h1>CounterEffect:</h1>
            {/* usamos la referencia del hook useRef declarado arriba */}
            <h2 ref={ counterElement }> {counter} </h2>
            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}
