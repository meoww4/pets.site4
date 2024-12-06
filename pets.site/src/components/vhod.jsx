import React, { useState } from 'react';

function Vhod() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        alert('Вход успешен! Перенаправление на личный кабинет.');
        window.location.href = 'profile.html';
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
                            required
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">Запомнить меня</label>
                        <div className="invalid-feedback">
                            Вы должны согласиться с опцией "Запомнить меня".
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-custom">Войти</button>
                </form>
            </main>
            <div class="container123"/>
        </div>
    );
}

export default Vhod;
