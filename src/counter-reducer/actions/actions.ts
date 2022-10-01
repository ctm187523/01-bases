
const actions = {
   'counterReset': 'reset' 
}


//definimos el action del counterReducer de la funcion counterReducer de la carpeta state
export type CounterAction =
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'resetear' };

//creamos Actions Creators ver video 23, esto nos sirve para manejar los posibles cambios en las variables no es obligatorio hacerlo pero si recomendable para mantener mejor el codigo
//devuelve un objeto de tipo CounterAction que es lo que espera el reducer del archivo CounterReducer de la carpeta state
//ponemos los parentesis para indicar que devuelve un objeto
export const doReset = (): CounterAction => ({
    type: 'resetear'
})

export const doIncreaseBy = (value:number):CounterAction => ({
    type: 'increaseBy', payload: {value}
})
