import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export const User = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUsername = async () => {
      setIsLoading(true);
      const name = await api.fetchUsername();
      setUsername(name);
      setIsLoading(false);
    };

    loadUsername();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Usuário: {username}</h1>
    </div>
  );
}
