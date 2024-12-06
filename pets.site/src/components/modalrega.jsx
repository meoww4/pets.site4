import React, { useState } from 'react';

function Modalrega({ setUserData }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState({
        login: '',
        password: '',
        passwordConfirmation: ''
    });
    const [register, setRegister] = useState(false);  // Состояние для отображения блока с паролем

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const formErrors = validateForm();
        if (Object.values(formErrors).some((error) => error !== '')) {
            setErrors(formErrors);
        } else {
            setUserData({ login, password });
            alert('Регистрация успешна!');
            setLogin('');
            setPassword('');
            setPasswordConfirmation('');
            setErrors({ login: '', password: '', passwordConfirmation: '' });
        }
    };

    const validateForm = () => {
        const formErrors = {
            login: '',
            password: '',
            passwordConfirmation: ''
        };

        if (!/^[a-zA-Z0-9_-]+$/.test(login)) {
            formErrors.login = 'Логин может содержать только английские буквы, цифры, дефис и подчеркивание.';
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/.test(password)) {
            formErrors.password = 'Пароль должен содержать хотя бы 1 цифру, 1 строчную и 1 заглавную букву, и быть не короче 7 символов.';
        }

        if (password !== passwordConfirmation) {
            formErrors.passwordConfirmation = 'Пароли не совпадают.';
        }

        return formErrors;
    };

    return (
        <div>
            <div className="modal fade" id="registrationModal" tabIndex={-1} aria-labelledby="registrationModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registrationModalLabel">Регистрация</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form id="registrationForm" className="needs-validation" onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="login" className="form-label">Логин</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.login ? 'is-invalid' : ''}`}
                                        id="login"
                                        placeholder="Логин"
                                        required
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                        pattern="^[a-zA-Z0-9_-]+$"
                                    />
                                    <div className="invalid-feedback">
                                        {errors.login || 'Логин может содержать только английские буквы, цифры, дефис и подчеркивание.'}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <button
                                        type="button"
                                        className="btn btn-link"
                                        onClick={() => setRegister(!register)}
                                    >
                                        {register ? 'Отказаться от автоматической регистрации' : 'Выбрать автоматическую регистрацию'}
                                    </button>
                                </div>

                                {register && (
                                    <>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Пароль</label>
                                            <input
                                                type="password"
                                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                id="password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$"
                                            />
                                            <div className="invalid-feedback">
                                                {errors.password || 'Пароль должен содержать хотя бы 1 цифру, 1 строчную и 1 заглавную букву, и быть не короче 7 символов.'}
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="passwordConfirmation" className="form-label">Подтверждение пароля</label>
                                            <input
                                                type="password"
                                                className={`form-control ${errors.passwordConfirmation ? 'is-invalid' : ''}`}
                                                id="passwordConfirmation"
                                                required
                                                value={passwordConfirmation}
                                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.passwordConfirmation || 'Пароли не совпадают.'}
                                            </div>
                                        </div>
                                    </>
                                )}

                                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modalrega;
