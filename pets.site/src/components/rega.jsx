import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Rega() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirm: false,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [id]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify(formData);
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw};
            fetch("https://pets.сделай.site/api/register", requestOptions)
                .then((response) => response.status)
                .then((result) => {console.log(result)
                if (result==204){
                alert('Регистрация успешна!');} else {
    alert('Такой адрес электронной почты уже занят.')
}})
          };
          
    return (
        <div>
            <main className="content-container-login">
                <form id="registrationForm" className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <p className="text-start fs-3">Регистрация</p>
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder='Иван'
                            pattern="^[А-Яа-яЁё ]{2,20}$"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                            Имя должно содержать только кириллицу, пробел и дефис от 2 до 20 символов.
                        </div>
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
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                            Укажите номер телефона в правильном формате.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder='user@user.com'
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                            Укажите корректный email.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{7,}"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                            Пароль должен содержать минимум 7 символов, включая 1 цифру, 1 строчную и 1 заглавную букву.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Повторите пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <div className="invalid-feedback">
                            Пароли должны совпадать.
                        </div>
                    </div>

                    <div className="mb-3 form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="confirm"
                            required
                            checked={formData.confirm}
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="confirm">
                            Согласен на обработку персональных данных
                        </label>
                        <div className="invalid-feedback">
                            Вы должны согласиться перед отправкой формы.
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-custom">
                        Зарегистрироваться
                    </button>
                </form>
            </main>
        </div>
    );
}

export default Rega;
