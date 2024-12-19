import React, { useState, useEffect } from 'react';
import Card from './card';

function AnimalCardsContainer() {
  const [pets, setPets] = useState([]);
  const [region, setRegion] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Preloader = () => (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );

  useEffect(() => {
    const loadPets = async () => {
      try {
        const response = await fetch('https://pets.сделай.site/api/pets');
        const result = await response.json();

        if (result.data && result.data.orders) {
          setPets(result.data.orders);
          setFilteredPets(result.data.orders);
        } else {
          throw new Error('Некорректный формат данных');
        }
      } catch (err) {
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    loadPets();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const lowerCaseRegion = region.trim().toLowerCase();
    const lowerCaseType = animalType.trim().toLowerCase();

    const filtered = pets.filter((pet) => {
      const matchesRegion = lowerCaseRegion ? pet.district.toLowerCase().includes(lowerCaseRegion) : true;
      const matchesType = lowerCaseType ? pet.kind.toLowerCase().includes(lowerCaseType) : true;
      return matchesRegion && matchesType;
    });

    setFilteredPets(filtered);
    setCurrentPage(1);
  };

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPets.slice(startIndex, startIndex + itemsPerPage);
  };

  const totalPages = Math.ceil(filteredPets.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <Preloader />;
  }

  if (error) {
    return <div className="text-danger">{error}</div>;
  }

  return (
    <div className="container mt-4">
      <div className="search-box mb-3">
        <h3>Поиск</h3>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Район"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Вид животного"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">Найти</button>
        </form>
      </div>

      <div className="row">
        {getCurrentPageItems().map((pet) => (
          <div key={pet.id} className="col-md-6 col-lg-4 mb-4">
            <Card data={pet} />
          </div>
        ))}
      </div>

      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default AnimalCardsContainer;
