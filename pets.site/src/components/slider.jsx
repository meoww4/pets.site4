import React, { useState, useEffect } from 'react';

function Slide({ data, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img
        src={`https://pets.xn--80ahdri7a.site/${data.image}`}
        className="d-block mx-auto"
        style={{ height: 500 }}
        alt={data.title}
      />
      <h2 className="text-center mt-3">{data.title}</h2>
      <p className="text-center">{data.description}</p>
    </div>
  );
}

const Preloader = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Загрузка...</span>
    </div>
  </div>
);

function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSliderData();
  }, []);

  const fetchSliderData = async () => {
    try {
      const response = await fetch('https://pets.сделай.site/api/pets/slider');
      const data = await response.json();
      setSliderData(data.data.pets || []);
      setLoading(false);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
      setLoading(false);
    }
  };

  const slides = sliderData.map((slide, index) => (
    <Slide key={index} data={slide} isActive={index === 0} />
  ));

  const indicators = sliderData.map((_, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={index}
      className={index === 0 ? 'active' : ''}
      aria-current={index === 0 ? 'true' : 'false'}
      aria-label={`Slide ${index + 1}`}
    />
  ));

  return (
    <div>
      <h2 className="text-center text-white bg-primary m-2">Найденные животные</h2>
      
      {/* Прелоадер, который появляется до загрузки данных */}
      {loading && <Preloader />}

      {/* Слайдер отображается только после загрузки данных */}
      {!loading && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide m-auto bg-success bg-opacity-25 w-75 p-2"
          data-bs-ride="carousel"
          style={{ minHeight: 400 }}
        >
          <div className="carousel-indicators">{indicators}</div>
          <div className="carousel-inner">{slides}</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Slider;
