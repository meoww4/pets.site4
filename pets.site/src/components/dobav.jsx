import React, { useState, useEffect } from 'react';

function Dobav() {
    const [petName, setPetName] = useState('');
    const [chipNumber, setChipNumber] = useState('');
    const [region, setRegion] = useState('');
    const [date, setDate] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [image3, setImage3] = useState(null);
    const [description, setDescription] = useState('');
    const [mark, setMark] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [isUserAuthorized, setIsUserAuthorized] = useState(false);
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        // Симуляция проверки авторизации (замените на реальный механизм проверки авторизации)
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setIsUserAuthorized(true);
            setUserName(userData.userName);
            setPhone(userData.phone);
            setEmail(userData.email);
        }
    }, []);

    const handlePetFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const errorsList = [];

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        if (!confirm) {
            errorsList.push('Вы должны согласиться на обработку персональных данных.');
        }

        if (errorsList.length > 0) {
            setErrors(errorsList);
            return;
        }

        alert('Объявление успешно добавлено!');
        window.location.href = 'search.html';
    };

    const handleRegistrationSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        alert('Регистрация успешна!');
        window.location.href = 'profile.html';
    };

    return (
        <div>
            <div className="content-container-add-pet">
                <div className="header-container">
                    <h2>Добавить объявление</h2>
                    {!isUserAuthorized && (
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationModal">Зарегистрироваться</button>
                    )}
                </div>

                <form id="petForm" className="needs-validation" onSubmit={handlePetFormSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="petName" className="form-label">Имя животного</label>
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
                        <label htmlFor="mark" className="form-label">Клеймо (необязательно)</label>
                        <input
                            type="text"
                            className="form-control"
                            id="mark"
                            placeholder="например, do-002-spb"
                            value={mark}
                            onChange={(e) => setMark(e.target.value)}
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

                    {errors.length > 0 && (
                        <div className="alert alert-danger">
                            {errors.map((error, index) => (
                                <p key={index}>{error}</p>
                            ))}
                        </div>
                    )}

                    <div className="col-12 mt-4">
                        <button className="btn btn-primary" type="submit">Опубликовать</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Dobav;
