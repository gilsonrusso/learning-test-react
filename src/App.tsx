import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <div>
         <h1>Contador: {contador}</h1>
        <Button onClick={handleIncrement} label={'Incrementar Contador'}/>
      </div>
    </>
  )
}

export default App
