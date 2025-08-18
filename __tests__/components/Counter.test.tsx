import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../../src/components/Counter'

describe('Componente Contador', () => {
  test('deve renderizar o valor inicial como 0', () => {
    render(<Counter />)

    const contadorElement = screen.getByTestId('contador-valor')

    expect(contadorElement).toHaveTextContent('0')
  })

  test('deve incrementar o valor do contador quando o botão é clicado', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const botao = screen.getByRole('button', { name: 'Incrementar' })
    const contadorElement = screen.getByTestId('contador-valor')

    expect(contadorElement).toHaveTextContent('0')

    await user.click(botao)

    expect(contadorElement).toHaveTextContent('1')
  })

  test('deve decrementar o valor do contador e depois retornar a zero', async () => {
    const user = userEvent.setup()
    render(<Counter />)

    const botaoIncrementar = screen.getByRole('button', { name: 'Incrementar' })
    const botaoDecrementar = screen.getByRole('button', { name: 'Decrementar' })
    const contadorElement = screen.getByTestId('contador-valor')

    expect(contadorElement).toHaveTextContent('0')

    await user.click(botaoIncrementar)
    expect(contadorElement).toHaveTextContent('1')

    await user.click(botaoDecrementar)
    expect(contadorElement).toHaveTextContent('0')
  })
})
