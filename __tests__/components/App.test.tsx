// __tests__/components/App.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../../src/App'

describe('Componente App', () => {
  test('deve incrementar o contador quando o botão for clicado', async () => {
    const user = userEvent.setup()
    render(<App />)

    const contadorElement = screen.getByText('Contador: 0')
    const botao = screen.getByRole('button', { name: 'Incrementar Contador' })

    expect(contadorElement).toBeInTheDocument()

    await user.click(botao)

    expect(screen.getByText('Contador: 1')).toBeInTheDocument()
  })
})
