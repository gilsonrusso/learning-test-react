type GreetingsProps = {
  name?: string;
}

export const Greetings = ({ name }: GreetingsProps) => {
  const displayAs = name ? name : 'Visitante';

  return (
    <div>
      <h1>Olá, {displayAs}!</h1>
    </div>
  );
}
