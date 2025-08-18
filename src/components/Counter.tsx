import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <h2>Contador</h2>
      <p data-testid="contador-valor">O valor é: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  )
}

export default Counter
