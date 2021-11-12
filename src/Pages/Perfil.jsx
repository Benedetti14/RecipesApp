import React from 'react';
import { getUser } from '../localStorage';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Perfil() {
  const { email } = getUser();
  return (
    <div>
      <Header title="Perfil" />
      <h1>Perfil</h1>
      <p>
        Email:
        <span data-testid="profile-email">{email}</span>
      </p>
      <button
        type="button"
        data-testid="profile-done-btn"
      >
        Receitas Feitas
      </button>
      <button
        type="button"
        data-testid="profile-favorite-btn"
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
      >
        Sair
      </button>
      <Footer />
    </div>
  );
}

export default Perfil;
