import { render, screen, waitFor } from '@testing-library/react'
import { User } from '../../src/components/User'
import { api } from '../../src/utils/api' // Importamos o objeto 'api'

describe('Componente User com jest.spyOn', () => {
  test('deve exibir o nome do usuário após o carregamento', async () => {
    const fetchSpy = jest
      .spyOn(api, 'fetchUsername')
      .mockResolvedValue('Maria da Silva')

    render(<User />)

    expect(screen.getByText('Carregando...')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Usuário: Maria da Silva')).toBeInTheDocument()
    })

    expect(fetchSpy).toHaveBeenCalledTimes(1)

    fetchSpy.mockRestore()
  })
})
