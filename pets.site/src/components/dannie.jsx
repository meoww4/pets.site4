function Dannie() {
    return ( 
        <div>
            <div className="container mt-4">
  <h2>Добро пожаловать в личный кабинет, Иван Иванович!</h2>
  <p>Здесь вы можете редактировать свои данные, управлять объявлениями и следить за статусом ваших публикаций.</p>
  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Ваши данные</h5>
          <p className="card-text"><strong>Имя:</strong> Иван</p>
          <p className="card-text"><strong>Фамилия:</strong> Иванов</p>
          <p className="card-text"><strong>Отчество:</strong> Иванович</p>
          <p className="card-text"><strong>Город:</strong> Москва</p>
          <p className="card-text"><strong>Дата рождения:</strong> 15 марта 1995</p>
          <p className="card-text"><strong>Телефон:</strong> +7 123 456 78 90</p>
          <a className="btn btn-primary" onclick="alert('Вы успешно отредактировали свой профиль')">Редактировать профиль</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
     );
}

export default Dannie;