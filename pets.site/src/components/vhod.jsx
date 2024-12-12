import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Vhod() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        try {
            const response = await fetch('https://pets.сделай.site/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setToken(data.token);
                setErrorMessage('');

                if (rememberMe) {
                    localStorage.setItem('authToken', data.token);
                } else {
                    sessionStorage.setItem('authToken', data.token);
                }

                alert('Вход успешен! Перенаправление на личный кабинет.');
                navigate('/profile');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Произошла ошибка. Попробуйте позже.');
            }
        } catch (error) {
            setErrorMessage('Сетевая ошибка. Попробуйте позже.');
        }
    };

    return (
        <div>
            <main className="content-container-login">
                <form id="loginForm" className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <p className="text-start fs-3">Вход в личный кабинет</p>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div id="emailHelp" className="form-text">
                            Мы никогда не делимся Вашими e-mail ни с кем.
                        </div>
                        <div className="invalid-feedback">
                            Пожалуйста, введите корректный email.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="invalid-feedback">
                            Пожалуйста, введите ваш пароль.
                        </div>
                    </div>
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-custom">Войти</button>
                </form>
                {errorMessage && (
                    <p className='text-danger text-center mt-3'>{errorMessage}</p>
                )}
                {token && (
                    <p className='text-success text-center mt-3'>Вы успешно вошли, ваш токен: {token}</p>
                )}
            </main>
        </div>
    );
}

export default Vhod;
