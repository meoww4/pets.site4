import React, { useState } from 'react';

function Rega() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [termsCheck, setTermsCheck] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        alert('Регистрация успешна! Перенаправление на страницу профиля.');
        window.location.href = 'profile.html';
    };

    return (
        <div>
            <div className="content-container-rega">
                <h2>Регистрация</h2>
                <form id="registrationForm" className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">Имя</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder="Иван"
                            pattern="^[А-Яа-яЁё]{2,20}$"
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Имя должно содержать только русские буквы от 2 до 20 символов.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Фамилия</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder="Петров"
                            pattern="^[А-Яа-яЁё]{2,20}$"
                            required
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Фамилия должна содержать только русские буквы от 2 до 20 символов.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="middleName" className="form-label">Отчество</label>
                        <input
                            type="text"
                            className="form-control"
                            id="middleName"
                            placeholder="Иванович"
                            pattern="^[А-Яа-яЁё]{2,30}$"
                            required
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Отчество должно содержать только русские буквы от 2 до 30 символов.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="birthDate" className="form-label">Дата рождения</label>
                        <input
                            type="date"
                            className="form-control"
                            id="birthDate"
                            max="2009-12-31"
                            required
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Дата рождения должна быть не позднее 2010 года (вам должно быть хотя бы 14 лет).
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">Город</label>
                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="Москва"
                            pattern="^[А-Яа-яЁё]{2,}$"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Город должен содержать только русские буквы, не менее 2 символов.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Номер телефона</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="+7 123 456 78 90"
                            pattern="^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}$"
                            required
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Укажите номер телефона в формате +7 123 456 78 90.
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="termsCheck"
                                required
                                checked={termsCheck}
                                onChange={(e) => setTermsCheck(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="termsCheck">
                                Примите условия и соглашения
                            </label>
                            <div className="invalid-feedback">
                                Вы должны принять перед отправкой.
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary" type="submit">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Rega;
