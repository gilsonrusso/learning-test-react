import { render, screen } from '@testing-library/react';
import { Greetings } from '../../src/components/Greetings';

describe('Componente Greetings', () => {

  test('deve renderizar a saudação com o nome fornecido', () => {
    render(<Greetings name="Gilson" />);
    
    const saudacao = screen.getByText('Olá, Gilson!');
    
    expect(saudacao).toBeInTheDocument();
  });

  test('deve renderizar a saudação genérica quando nenhum nome é fornecido', () => {
    render(<Greetings />);
    
    const saudacao = screen.getByText('Olá, Visitante!');
    
    expect(saudacao).toBeInTheDocument();
  });

});