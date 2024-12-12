import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dannie(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Вы вышли из личного кабинета.');
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-dark">Добро пожаловать в личный кабинет!</h2>
      <p className="text-center text-dark mb-4">Здесь вы можете редактировать свои данные и управлять объявлениями.</p>

      <div className="row">
        <div className="content-container-login col-md-8 col-lg-6 col-xl-5">
          
            <div className="card-body">
              <h5 className="card-title text-center text-dark">Ваши данные</h5>
              <div className="d-flex justify-content-between mb-3">
                <p className="text-dark" style={{ fontWeight: '600' }}>Имя:</p>
                <p className="text-dark">{props.data.name}</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p className="text-dark" style={{ fontWeight: '600' }}>Дата регистрации:</p>
                <p className="text-dark">{props.data.registrationDate}</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p className="text-dark" style={{ fontWeight: '600' }}>Электронная почта:</p>
                <p className="text-dark">{props.data.email}</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p className="text-dark" style={{ fontWeight: '600' }}>Добавленные объявления:</p>
                <p className="text-dark">{props.data.countOrder}</p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <p className="text-dark" style={{ fontWeight: '600' }}>Найденные животные:</p>
                <p className="text-dark">{props.data.countPets}</p>
              </div>
              <div className="text-center">
                <a
                  className="btn btn-primary"
                  onClick={() => alert('Вы успешно отредактировали свой профиль')}
                >
                  Редактировать профиль
                </a>
              </div>
              <div className="text-center mt-3">
                <button
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Выйти
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dannie;
