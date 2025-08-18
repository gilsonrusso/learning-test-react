import { render, screen, waitFor } from '@testing-library/react'
import { User } from '../../src/components/User'
import { fetchUsername } from '../../src/utils/fetchUsername'

// MOCK da função `fetchUsername`
// Isso "substitui" a função original em todos os testes neste arquivo
jest.mock('../../src/utils/fetchUsername')

describe.skip('Componente User', () => {
  test('deve exibir o nome do usuário após o carregamento', async () => {
    ;(fetchUsername as jest.Mock).mockResolvedValue('João da Silva')

    render(<User />)

    expect(screen.getByText('Carregando...')).toBeInTheDocument()

    // 4. Aguarda até que a mensagem de carregamento desapareça e o nome do usuário apareça
    await waitFor(() => {
      expect(screen.getByText('Usuário: João da Silva')).toBeInTheDocument()
    })

    // 5. Verifica se a mensagem de carregamento não está mais visível
    expect(screen.queryByText('Carregando...')).not.toBeInTheDocument()
  })
})
