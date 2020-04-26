/* eslint-disable no-shadow */
import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Title, Form, Repositoris, Error } from './styles';

import logoImg from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositoris] = useState<Repository[]>(() => {
    const storeGedRepositories = localStorage.getItem(
      '@GiHubExplore:repositories',
    );

    if (storeGedRepositories) {
      return JSON.parse(storeGedRepositories);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GiHubExplore:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAdRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite autor/nome repositório');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepo}`);

      const repository = response.data;

      setNewRepo('');
      setInputError('');

      setRepositoris([...repositories, repository]);
    } catch (error) {
      setNewRepo('');
      setInputError('Erro na busca deste Repositório');
    }
  }
  return (
    <>
      <img src={logoImg} alt="GitHub Explore" />
      <Title>Explore Repositórios no GitHub </Title>

      <Form hasError={!!inputError} onSubmit={handleAdRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do  repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      <Repositoris>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositoris>
    </>
  );
};

export default Dashboard;
