/* import React, { useState } from 'react';

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
*/

import React, { useState } from 'react';

function Rega() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirm: 0,
    });
    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validateForm = (e) => {
        e.preventDefault();
        const { name, phone, email, password, confirmPassword, confirm } = formData;
        const newErrors = [];

        // Validate name
        if (!/^[\u0400-\u04FF\s\-]+$/.test(name)) {
            newErrors.push("Имя может содержать только кириллицу, пробел и дефис.");
        }

        // Validate phone
        if (!/^\+?\d+$/.test(phone)) {
            newErrors.push("Телефон должен содержать только цифры и знак +.");
        }

        // Validate email
        if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.push("Email имеет неверный формат.");
        }

        // Validate password
        if (password.length < 7 || !/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            newErrors.push("Пароль должен содержать минимум 7 символов, включая 1 цифру, 1 строчную и 1 заглавную букву.");
        }

        // Validate password confirmation
        if (password !== confirmPassword) {
            newErrors.push("Пароли не совпадают.");
        }

        // Validate confirmation
        if (confirm !== 1) {
            newErrors.push("Необходимо подтвердить согласие на обработку персональных данных.");
        }

        if (newErrors.length > 0) {
            setErrors(newErrors);
            return;
        }

        submitForm();
    };

    const submitForm = async () => {
        const response = await fetch('https://pets.сделай.site/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password,
                confirm: formData.confirm,
            }),
        });

        if (response.status === 204) {
            setSuccessMessage("Регистрация прошла успешно!");
            setErrors([]);
        } else if (response.status === 422) {
            const errorData = await response.json();
            const validationErrors = Object.values(errorData.errors).flat();
            setErrors(validationErrors);
        } else {
            setErrors(["Произошла ошибка. Попробуйте позже."]);
        }
    };

    return (
        <div>
            <div className="container mt-5">
                <h2>Регистрация</h2>
                <form id="registrationForm" onSubmit={validateForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Телефон</label>
                        <input type="tel" className="form-control" id="phone" pattern="\+?\d+" value={formData.phone} onChange={handleChange} placeholder="+7 (999) 999-99-99" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Повторите пароль</label>
                        <input type="password" className="form-control" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="confirm" value={1} checked={formData.confirm === 1} onChange={() => setFormData({ ...formData, confirm: formData.confirm === 1 ? 0 : 1 })} />
                        <label className="form-check-label" htmlFor="confirm">Согласен на обработку персональных данных</label>
                    </div>
                    <button type="submit" className="btn" style={{ backgroundColor: '#bbc6c9' }}>Зарегистрироваться</button>
                </form>
                {errors.length > 0 && (
                    <div className="alert alert-danger mt-3">
                        <ul>
                            {errors.map((error, index) => <li key={index}>{error}</li>)}
                        </ul>
                    </div>
                )}
                {successMessage && (
                    <div className="alert alert-success mt-3">{successMessage}</div>
                )}
            </div>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Rega;