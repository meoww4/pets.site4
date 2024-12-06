import Котик from '../image/pets/котик.jpg'
import Кошка from '../image/pets/кошка.jpg'
import Кролик from '../image/pets/кролик.jpg'

function Obyav() {
    return ( 
        <div>
            <div className="container mt-4">
  <h2>Ваши объявления</h2>


  <div className="row">
    <div className="col-md-4">
      <div className="card">
        <img src={Котик} alt="Котенок" />
        <h5 className="card-title">Котенок</h5>
        <p className="card-text">Маленький серый котенок, потерялся в московском районе.</p>
          <div className="mb-3">
           <a className="btn btn-primary" onclick="alert('Редактировать объявление')">Редактировать</a>
           </div>
           <div className="mb-3">
          <a className="btn btn-primary" onclick="alert('Объявление удалено')">Удалить</a>
        </div>
      </div>
    </div>
    


    <div className="col-md-4">
      <div className="card">
        <img src={Кошка} alt="Кошка" />
        <h5 className="card-title">Кошка</h5>
        <p className="card-text">Кошка, пушистая, серая, потерялась в районе Московского вокзала.</p>
        <div className="mb-3">
           <a className="btn btn-primary" onclick="alert('Редактировать объявление')">Редактировать</a>
           </div>
           <div className="mb-3">
          <a className="btn btn-primary" onclick="alert('Объявление удалено')">Удалить</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img src={Кролик} alt="Кролик" />
        <h5 className="card-title">Кролик</h5>
        <p className="card-text">Белый кролик, потерян в районе Академического. Любит морковь.</p>
        <div className="mb-3">
           <a className="btn btn-primary" onclick="alert('Редактировать объявление')">Редактировать</a>
           </div>
           <div className="mb-3">
          <a className="btn btn-primary" onclick="alert('Объявление удалено')">Удалить</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
     );
}

export default Obyav;