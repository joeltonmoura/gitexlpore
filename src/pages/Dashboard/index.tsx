import React from 'react';

import { Title, Form, Repositoris } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explore" />
      <Title>Explore Repositórios no GitHub </Title>

      <Form action="">
        <input placeholder="Digite o nome do  repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositoris>
        <a href="a">
          <img
            src="https://avatars1.githubusercontent.com/u/40373926?s=400&u=e074f33454456310c19c4e7ed85a7e3124e59cef&v=4"
            alt="Joelton Moura"
          />
          <div>
            <strong>rocketseat/unforme</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
        </a>
      </Repositoris>
    </>
  );
};

export default Dashboard;
