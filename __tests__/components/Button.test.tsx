import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../../src/components/Button';

describe('Componente Button', () => {
    test('deve chamar a função onClick quando o botão for clicado', async () => {
        const user = userEvent.setup();
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick} label="Clique Aqui" />);

        const botao = screen.getByRole('button', { name: 'Clique Aqui' });
        await user.click(botao);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    })
})