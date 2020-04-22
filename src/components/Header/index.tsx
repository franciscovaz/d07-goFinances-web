import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  actualPage?: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  actualPage = 'dashboard',
}: HeaderProps) => (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={actualPage === 'dashboard' ? 'underLine' : ''} to="/"
          >
            Listagem
        </Link>
          <Link
            className={actualPage === 'import' ? 'underLine' : ''}
            to="/import"
          >
            Importar
        </Link>
        </nav>
      </header>
    </Container>
  );

export default Header;
