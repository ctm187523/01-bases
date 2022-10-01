import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBY";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from './bases/CounterHook';
import { CounterReducerComponent } from './counter-reducer/CounterReducer';


function App() {
  return (
    <>
      <Counter initialValue={ 15 } />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
