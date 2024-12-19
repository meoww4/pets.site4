import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dobav() {
  const [petName, setPetName] = useState('');
  const [region, setRegion] = useState('');
  const [date, setDate] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [description, setDescription] = useState('');
  const [mark, setMark] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (!form.checkValidity()) {
      setFormValidated(true);
      return;
    }
    // Здесь можно добавить логику отправки формы
  };

  return (
    <div className="content-container-add-pet">
      <form
        id="petForm"
        className={`needs-validation ${formValidated ? 'was-validated' : ''}`}
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className="text-center mb-4">Добавить объявление</h3>

        {/* Поля для объявления */}
        <div className="mb-3">
          <label htmlFor="petName" className="form-label">Ваше имя</label>
          <input
            type="text"
            className="form-control"
            id="petName"
            placeholder="Например, Барсик"
            required
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <div className="invalid-feedback">Пожалуйста, введите имя животного.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Телефон</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            pattern="^\+7\d{3}\d{3}\d{2}\d{2}$"
            placeholder="+79991234567"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="invalid-feedback">Укажите номер телефона в правильном формате.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="region" className="form-label">Район</label>
          <input
            type="text"
            className="form-control"
            id="region"
            placeholder="Центральный"
            required
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <div className="invalid-feedback">Пожалуйста, укажите район.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Дата</label>
          <input
            type="date"
            className="form-control"
            id="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="invalid-feedback">Пожалуйста, укажите дату.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="animalType" className="form-label">Вид животного</label>
          <input
            type="text"
            className="form-control"
            id="animalType"
            placeholder="Собака, кошка и т.д."
            required
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          />
          <div className="invalid-feedback">Пожалуйста, укажите вид животного.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="mark" className="form-label">Номер чипа</label>
          <input
            type="text"
            className="form-control"
            id="mark"
            placeholder="1234AB"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
          />
        </div>


        <div className="mb-3">
          <label htmlFor="image" className="form-label">Фото животного (обязательное)</label>
          <input
            type="file"
            className="form-control"
            id="image"
            accept="image/*"
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="invalid-feedback">Пожалуйста, загрузите фото животного.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="image2" className="form-label">Фото животного (необязательное)</label>
          <input
            type="file"
            className="form-control"
            id="image2"
            accept="image/*"
            onChange={(e) => setImage2(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image3" className="form-label">Фото животного (необязательное)</label>
          <input
            type="file"
            className="form-control"
            id="image3"
            accept="image/*"
            onChange={(e) => setImage3(e.target.files[0])}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Описание</label>
          <textarea
            className="form-control"
            id="description"
            rows={4}
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="invalid-feedback">Пожалуйста, предоставьте описание.</div>
        </div>

        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="isRegistered"
            checked={isRegistered}
            onChange={(e) => setIsRegistered(e.target.checked)} />
          <label className="form-check-label" htmlFor="isRegistered">
            Зарегистрироваться
          </label>
          <div className="invalid-feedback">Вы должны согласиться на регистрацию.</div>
        </div>

        {isRegistered && (
          <>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="user@user.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback">Пожалуйста, введите корректный email.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Пароль</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Введите пароль"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">Пожалуйста, введите пароль.</div>
            </div>
          </>
        )}

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="confirm"
            required
            checked={confirm}
            onChange={(e) => setConfirm(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="confirm">Согласие на обработку персональных данных</label>
          <div className="invalid-feedback">Вы должны согласиться на обработку персональных данных.</div>
        </div>

        <div className="col-12 mt-4">
          <button className="btn btn-primary w-100" type="submit">Опубликовать</button>
        </div>
      </form>
    </div>
  );
}

export default Dobav;
