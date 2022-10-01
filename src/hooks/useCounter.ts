import { useState, useRef, useEffect, useLayoutEffect } from 'react';
//hemos descargado gsap con yarn add gsap para hacer animaciones lo importamos
import { gsap } from 'gsap';
import { parseConfigFileTextToJson } from 'typescript';



//recibe por parametro el maxCount que esta inicializada en 1 haciendo que el valor que recibimos sea opcional
//ya que podria venir undefined
export const useCounter = ({ maxCount = 1 }) => {


    const [counter, setcounter] = useState(5);

    //usamos el hook de React useRef para crear una referencia al elemeto a animar
    //useRef al cambiar el valor no provoca un renderizado como hace el useState
    //podriamos poner de tipo HTMLHeadingElement que es donde lo usaremos en la etiqueta h2 del render
    //pero usaremos any para que sea generico
    //y lo inicializamos como null
    const elementToAnimate = useRef<any>(null);

    //usamos el useRef para crear una referencia al objeto timeline de la libreria gsap para hacer animaciones
    //de esta manera hacemos que solo se cree una vez y no como estaba antes dentro del useEffect que se creaba cada 
    //vez que pulsamos el contador
    const tl = useRef(gsap.timeline());


    const handleClick = () => {

        //queremos evitar que al llegar al valor del MAXIMUN_COUNT no supere ese valor
        //usamos la funcion Math.min para indicar que trabaje en el intervalor del prev +1 y el valor del MAXIMUN_COUNT
        setcounter(prev => Math.min(prev + 1, maxCount));

        //tambien podriamos hacerlo como esta en la linea de abajo usando
        //la condicion && que se ejecute solo si se cumple la condicion
        //counter !== MAXIMUN_COUNT && setcounter( (prev) => prev +1 );

    }

    //usamos el hook useLayoutEffect que es como el useEffect pero se asegura de que ya tengamos construido los elementos html
    useLayoutEffect(() => {

        //esta instruccion hace que solo se ejecute el codigo si existe el elementToAnimate
        if( !elementToAnimate.current ) return;


        //usamos el objeto el useRef creado arriba en la linea 23 para evitar que se cree cada vez que usamos el useEffect
        //decimos que el elemento h2(con la referencia realizada arriba elementToAnimate) suba en 10, con duration decimos que la translacion dure 0,2 milesimas de segundo, 
        //con ease decimos como sera la translacion, con ease.out decimos que se desacelere al llegar al final
        tl.current.to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
            .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' }) //con bounce.out hacemos que rebote en la salida
            .pause() //con pause le decimos que no se inicie lo iniciamos abajo en el use effect

    }, []) //no tiene dependencia solo se ejecuta una vez al iniciar el componente


    useEffect(() => {

        tl.current.play(0); //iniciamos la animacion desde el inicio play(0) cada vez que se pulsa el boton

    }, [counter]) //la dependencia es cada vez el que el counter cambia al pulsar el boton

    //si pongo return{} en vez de return() retorno un objeto en vez de renderizar el html como se hace en los componentes
    return {
        counter,
        elementToAnimate,
        handleClick
    }
}