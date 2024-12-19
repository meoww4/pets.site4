import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../image/logo.jpg';

const Login123 = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const auth = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(user);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.data) {
          localStorage.setItem('token', result.data.token);
          setToken(result.data.token);

          setErrorMessage('');
          alert('Вход успешен! Перенаправление на личный кабинет.');
          navigate('/profile');

          const modal = document.getElementById('exampleModal1');
          const modalBackdrop = document.querySelector('.modal-backdrop');
          if (modal) modal.classList.remove('show');
          if (modalBackdrop) modalBackdrop.remove();
          document.body.classList.remove('modal-open');
          document.body.style.overflow = "auto";
          document.body.style.paddingRight = "";
        } else {
          setErrorMessage('Неправильный адрес электронной почты или пароль');
          document.getElementById('error').style.display = 'block';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Произошла ошибка, попробуйте снова');
        document.getElementById('error').style.display = 'block';
      });
  };

  // Improved debounce for search query
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const fetchSuggestions = (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    fetch(`https://pets.сделай.site/api/search?query=${query}`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          setSuggestions([]);
          return null;
        }
      })
      .then((data) => {
        if (data && data.data.orders) {
          setSuggestions(data.data.orders);
        } else {
          setSuggestions([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      });
  };

  // Debounced fetch
  const debouncedFetchSuggestions = debounce(fetchSuggestions, 500);

  // Handle search input change
  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);  // Directly update searchQuery state
    debouncedFetchSuggestions(value);  // Only debounce the search fetch
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const Header = () => {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand">
              <img src={logo} className="w-25 rounded-3" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className={'nav-link'} aria-current="page">Главная</Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className={'nav-link'}>Личный кабинет</Link>
                </li>
                <li className="nav-item">
                  <Link to="/registration" className="nav-link">Регистрация</Link>
                </li>
                <li className="nav-item">
                  <Link to="/add_pet" className="nav-link">Добавить объявление</Link>
                </li>
                <li className="nav-item">
                  <Link to="/search" className="nav-link">Поиск по объявлениям</Link>
                </li>
              </ul>
              <form className="d-flex align-items-center" onSubmit={handleSearch}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Поиск"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchQueryChange}
                  style={{ width: '250px' }}
                />
                <button className="btn btn-primary me-2" type="submit">Поиск</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                  Вход
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  };

  return (
    <>
      <Header />
      <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Вход</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body text-start">
              <form id="form" onSubmit={auth} noValidate>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="exampleInputPassword1"
                      value={user.password}
                      onChange={handleChange}
                      name="password"
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Скрыть" : "Показать"}
                    </button>
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                </div>
                <button type="submit" className="btn btn-primary btn-custom">Войти</button>
              </form>
              <p className='text-danger text-center' id='error' style={{ display: errorMessage ? 'block' : 'none' }}>{errorMessage}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
      {suggestions.length > 0 && (
        <div className="suggestions">
          <ul>
            {suggestions.map((suggestion) => (
              <li key={suggestion.id}>
                <Link to={`/card/${suggestion.id}`} className="suggestion-link">
                  {suggestion.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {searchQuery.length >= 3 && suggestions.length === 0 && (
        <p className="text-center mt-3">Нет результатов</p>
      )}
    </>
  );
};

export default Login123;
