import Собака from '../image/pets/собака.jpg'
import Мышь from '../image/pets/мышь.jpg'
import Горилла from '../image/pets/горилла.jpg'
import Котик from '../image/pets/котик.jpg'
import Свинья from '../image/pets/свинья.jpg'


function One () {
    return ( 
        <div>
  <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
  <div id="carouselExampleIndicators" className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2" data-bs-ride="carousel" style={{minHeight: 400}}>
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" className />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" className />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" className />
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" className />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={Собака} className="d-block mx-auto" style={{height: 500}} alt="Собака" />
        <h2 className="text-center mt-3">Найдена собака</h2>
        <p>Собака рыжая, была утеряна в красногвардейском районе</p>
      </div>
      <div className="carousel-item">
        <img src={Мышь} className="d-block mx-auto" style={{height: 500}} alt="Мышь" />
        <h2 className="text-center mt-3">Найдена мышь</h2>
        <p>Мышь серая, была утеряна в центральном районе</p>
      </div>
      <div className="carousel-item">
        <img src={Горилла}  className="d-block mx-auto" style={{height: 500}} alt="Горилла" />
        <h2 className="text-center mt-3">Найдена горилла</h2>
        <p>Горилла, была утеряна в красногвардейском районе</p>
      </div>
      <div className="carousel-item">
        <img src={Котик} className="d-block mx-auto" style={{height: 500}} alt="Котенок" />
        <h2 className="text-center mt-3">Найден котенок</h2>
        <p>Маленький серый котенок, потерялся в московском районе</p>
      </div>
      <div className="carousel-item">
        <img src={Свинья} className="d-block mx-auto" style={{height: 500}} alt="Свинья" />
        <h2 className="text-center mt-3">Найдена свинья</h2>
        <p>Крутая свинья бегала потерянная в приморском районе</p>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
</div>

     );
}

export default One;