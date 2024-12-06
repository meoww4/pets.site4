import React from 'react';
import logo from '../image/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-">
  <div className="container-fluid">
  <Link to={'/'} className="navbar-brand">
    <img src={logo} className="w-25 rounded-3" alt="logo"/>
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link  to="/" className={'nav-link'} aria-current="page">Главная</Link>
        </li>

        <li className="nav-item">
          <Link to="/profile" className={'nav-link'}>Личный кабинет</Link>
        </li>
        <li className="nav-item">
          <Link to="/registration" className={"nav-link"}>Регистрация</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className={"nav-link"}>Вход</Link>
        </li>
        <li className="nav-item">
          <Link to="/add_pet" className={"nav-link"}>Добавить объявление</Link>
        </li>
        <li className="nav-item">
          <Link to="/search" className={"nav-link"}>Поиск по объявлениям</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" list="pets" placeholder="Поиск" aria-label="Search" />
        <button className="btn btn-primary" onclick>Поиск</button>
        <datalist id="pets">
          <option value="Кошка">
          </option><option value="Собака">
          </option><option value="Корова">
          </option><option value="Крокодил">
          </option><option value="Сова">
          </option></datalist>
      </form>
    </div>
  </div>
</nav>

    </header>
  );
};

export default Header;
