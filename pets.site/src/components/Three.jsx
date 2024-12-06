function Three () {
    return ( 
    <div>
  <h2 className="text-center text-white bg-primary m-2">Подписка на новости</h2>
  <form id="subscriptionForm" className="w-50 m-auto p-3 needs-validation" noValidate>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной почты</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
      <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.</div>
      <div className="invalid-feedback">
        Пожалуйста, введите корректный адрес электронной почты.
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Подписаться</button>
  </form>
</div>

    );
}

export default Three;