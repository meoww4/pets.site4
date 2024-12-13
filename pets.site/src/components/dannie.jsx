import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dannie(props) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: props.data.name,
    email: props.data.email,
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    alert('Вы вышли из личного кабинета.');
    navigate('/');
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch('https://pets.сделай.site/api/edit-profile', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Данные успешно обновлены!');
          setIsEditing(false);
        } else {
          alert('Ошибка при обновлении данных.');
        }
      })
      .catch(() => alert('Ошибка сети. Попробуйте позже.'));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-dark">Добро пожаловать в личный кабинет!</h2>
      <p className="text-center text-dark mb-4">Здесь вы можете редактировать свои данные и управлять объявлениями.</p>

      <div className="row">
        <div className="content-container-login col-md-8 col-lg-6 col-xl-5">
          <div className="card-body">
            <h5 className="card-title text-center text-dark">Ваши данные</h5>

            {isEditing ? (
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Имя:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Электронная почта:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success">Сохранить</button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={handleEditToggle}
                  >
                    Отмена
                  </button>
                </div>
              </form>
            ) : (
              <>
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
                  <button className="btn btn-primary" onClick={handleEditToggle}>
                    Редактировать профиль
                  </button>
                </div>
              </>
            )}

            <div className="text-center mt-3">
              <button className="btn btn-danger" onClick={handleLogout}>
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
