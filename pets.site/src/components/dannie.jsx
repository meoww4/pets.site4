import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // Импортируем хук навигации

function Dannie(props) {
  const navigate = useNavigate();  // Инициализируем хук навигации

  // Состояния для редактирования email и номера телефона
  const [isEditing, setIsEditing] = useState(false);  // Флаг, показывающий, редактируем ли мы данные
  const [email, setEmail] = useState(localStorage.getItem('email') || props.data.email || '');  // Изначально пустое значение
  const [phone, setPhone] = useState(localStorage.getItem('phone') || props.data.phone || '');  // Изначально пустое значение

  // Восстановление значений из localStorage при загрузке компонента
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPhone = localStorage.getItem('phone');
    
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      setEmail(props.data.email); // Если нет сохраненного значения, берем из props
    }

    if (savedPhone) {
      setPhone(savedPhone);
    } else {
      setPhone(props.data.phone); // Если нет сохраненного значения, берем из props
    }
  }, [props.data.email, props.data.phone]); // Добавляем зависимости

  // Функция для выхода из аккаунта
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    alert('Вы вышли из личного кабинета.');
    navigate('/');  // Перенаправляем на главную страницу
  };

  // Функция для сохранения изменений email
  const saveChanges = () => {
    // Сохраняем email и phone в localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);

    // Отправляем изменения на сервер
    fetch('https://pets.сделай.site/api/users/email', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ email, phone }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка при обновлении данных');
        }
        return response.json();
      })
      .then((data) => {
        alert('Изменения успешно сохранены!');
        setIsEditing(false);  // Закрываем форму редактирования
      })
      .catch((error) => {
        alert('Ошибка: ' + error.message);
      });
  };

  // Функция для сохранения изменений телефона
  const savePhoneChanges = async () => {
    try {
      const responsePhone = await fetch("https://pets.сделай.site/api/users/phone", {
        method: "PATCH", // Используем PATCH для обновления данных
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`,  // Если требуется токен для авторизации
        },
        body: JSON.stringify({ phone }),
      });
    
      if (responsePhone.ok) {
        localStorage.setItem('phone', phone); // Сохраняем phone в localStorage
      } else {
        alert('Ошибка при обновлении телефона.');
        return;
      }
    
      alert('Изменения сохранены!');
      setIsEditing(false); // Закрываем форму редактирования email
    } catch (error) {
      alert('Произошла ошибка при обновлении данных. Попробуйте снова.');
    }
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
              <form onSubmit={(e) => { e.preventDefault(); saveChanges(); }}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Электронная почта:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Телефон:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success" onClick={savePhoneChanges}>Сохранить изменения</button>
                  <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => setIsEditing(false)}
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
                  <p className="text-dark">{email}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <p className="text-dark" style={{ fontWeight: '600' }}>Телефон:</p>
                  <p className="text-dark">{phone}</p>
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
                  <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                    Изменить
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
