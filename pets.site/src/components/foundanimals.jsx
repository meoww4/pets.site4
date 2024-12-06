import React, { useState } from 'react';
import AnimalCard from '../components/animalcard'; 

import собака from '../image/pets/собака.jpg';
import кошка from '../image/pets/кошка.jpg';
import попугай from '../image/pets/попугай.jfif';
import свинья from '../image/pets/свинья.jpg';
import кролик from '../image/pets/кролик.jpg';
import коза from '../image/pets/коза.jpeg';
import корги from '../image/pets/корги.jpg';
import мышь from '../image/pets/мышь.jpg';
import котик from '../image/pets/котик.jpg';
import кошка2 from '../image/pets/кошка2.jpg';

const animals = [
  { image: собака, id: 77, type: 'Собака', description: 'Собака рыжая, была утеряна в Красногвардейском районе', mark: 'do-002-spb', district: 'Красногвардейский', date: '12-10-2024' },
  { image: кошка, id: 14, type: 'Кошка', description: 'Потерялась кошка, пушистая, серая. Любит играть, ласковая.', mark: 'go-011-spb', district: 'Василеостровский', date: '24-03-2020' },
  { image: попугай, id: 88, type: 'Попугай', description: 'Попугай, зеленый, потерян в центральной части города.', mark: 'po-004-spb', district: 'Центральный', date: '28-10-2024' },
  { image: свинья, id: 99, type: 'Свинья', description: 'Молодая свинья, была найдена на окраине города, в районе деревни.', mark: 'sv-101-spb', district: 'Калининский', date: '10-11-2024' },
  { image: кролик, id: 22, type: 'Кролик', description: 'Белый кролик, потерян в районе Академического. Любит морковь.', mark: 'kr-202-spb', district: 'Калининский', date: '22-10-2024' },
  { image: коза, id: 18, type: 'Коза', description: 'Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.', mark: 'go-011-spb', district: 'Центральный', date: '14-03-2022' },
  { image: корги, id: 17, type: 'Собака', description: 'Потерялась собака породы корги, очень любит бегать.', mark: 'ca-105-spb', district: 'Красногвардейский', date: '15-06-2024' },
  { image: мышь, id: 58, type: 'Мышь', description: 'Мышь серая, была утеряна в центральном районе.', mark: 'mo-244-spb', district: 'Центральный', date: '15-06-2024' },
  { image: котик, id: 10, type: 'Котенок', description: 'Маленький серый котенок, потерян в лесу.', mark: 'ca-551-spb', district: 'Приморский', date: '15-06-2024' },
  { image: кошка2, id: 25, type: 'Кошка', description: 'Кошка черная с белыми пятнами, потерялась на выходных.', mark: 'ca-089-spb', district: 'Выборгский', date: '22-10-2023' }
];



const Poisk = () => {
    const [region, setRegion] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredAds, setFilteredAds] = useState(animals);

    const itemsPerPage = 4;

    const getFilteredAds = () => {
        const lowerCaseRegion = region.trim().toLowerCase();
        const lowerCaseType = animalType.trim().toLowerCase();

        return animals.filter(ad => {
            const matchesRegion = lowerCaseRegion ? ad.district.toLowerCase().includes(lowerCaseRegion) : true;
            const matchesType = lowerCaseType ? ad.type.toLowerCase().includes(lowerCaseType) : true;
            return matchesRegion && matchesType;
        });
    };

    const searchAds = (event) => {
        event.preventDefault();
        const filtered = getFilteredAds();
        setFilteredAds(filtered);
        setCurrentPage(1);
    };

    const displayAds = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const adsToDisplay = filteredAds.slice(startIndex, startIndex + itemsPerPage);
  
      return adsToDisplay.map((ad, index) => (
          <div key={index} className="pet-card col-md-6">
              <img src={ad.image} alt={ad.type} />
              <div className="card-body">
                  <h5>{ad.type}</h5>
                  <p>{ad.description}</p>
                  <p><strong>ID:</strong> {ad.id}</p> 
                  <p><strong>Номер чипа:</strong> {ad.mark}</p> 
                  <p><strong>Район:</strong> {ad.district}</p>
                  <p><strong>Дата:</strong> {ad.date}</p>
              </div>
              <div className="contact-button">
                  <button className="btn btn-primary">Связаться</button>
              </div>
          </div>
      ));
  };
  
  

    const updatePagination = () => {
        const totalPages = Math.ceil(filteredAds.length / itemsPerPage);
        return Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                    {i + 1}
                </button>
            </li>
        ));
    };

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Поиск по объявлениям</h2>
            <div className="search-box">
                <h3>Поиск</h3>
                <form id="searchForm" onSubmit={searchAds} className="needs-validation">
                    <input
                        type="text"
                        id="regionInput"
                        placeholder="Район"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                    />
                    <input
                        type="text"
                        id="animalTypeInput"
                        placeholder="Вид животного"
                        value={animalType}
                        onChange={(e) => setAnimalType(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Найти</button>
                </form>
            </div>

            <div className="container">
                <div className="row">
                    {displayAds()}
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    {updatePagination()}
                </ul>
            </nav>
        </div>
    );
};

export default Poisk;
