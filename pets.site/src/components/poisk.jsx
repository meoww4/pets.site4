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

import React, { useState } from 'react';

const ads = [
    { id: 77, type: "Собака", description: "Собака рыжая, была утеряна в Красногвардейском районе", chipNumber: "do-001-spb", region: "Красногвардейский", date: "12-10-2024", image: собака },
    { id: 14, type: "Кошка", description: "Потерялась кошка, пушистая, серая. Любит играть, ласковая.", chipNumber: "ca-001-spb", region: "Василеостровский", date: "24-03-2020", image: кошка },
    { id: 88, type: "Попугай", description: "Попугай, зеленый, потерян в центральной части города.", chipNumber: "po-004-spb", region: "Центральный", date: "28-10-2024", image: попугай },
    { id: 99, type: "Свинья", description: "Молодая свинья, была найдена на окраине города, в районе деревни.", chipNumber: "sv-101-spb", region: "Калининский", date: "10-11-2024", image: свинья },
    { id: 22, type: "Кролик", description: "Белый кролик, потерян в районе Академического. Любит морковь.", chipNumber: "kr-202-spb", region: "Калининский", date: "22-10-2024", image: кролик },
    { id: 18, type: "Коза", description: "Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.", chipNumber: "go-011-spb", region: "Центральный", date: "14-03-2022", image: коза },
    { id: 17, type: "Собака", description: "Потерялась собака породы корги, очень любит бегать.", chipNumber: "ca-105-spb", region: "Красногвардейский", date: "15-06-2024", image: корги },
    { id: 58, type: "Мышь", description: "Мышь серая, была утеряна в центральном районе.", chipNumber: "mo-244-spb", region: "Центральный", date: "15-06-2024", image: мышь },
    { id: 10, type: "Котенок", description: "Маленький серый котенок, потерян в лесу.", chipNumber: "ca-551-spb", region: "Приморский", date: "15-06-2024", image: котик },
    { id: 25, type: "Кошка", description: "Кошка черная с белыми пятнами, потерялась на выходных.", chipNumber: "ca-089-spb", region: "Выборгский", date: "22-10-2023", image: кошка2 },
];

function Poisk() {
    const [region, setRegion] = useState('');
    const [animalType, setAnimalType] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredAds, setFilteredAds] = useState(ads);

    const itemsPerPage = 4;

    const getFilteredAds = () => {
        const lowerCaseRegion = region.trim().toLowerCase();
        const lowerCaseType = animalType.trim().toLowerCase();

        return ads.filter(ad => {
            const matchesRegion = lowerCaseRegion ? ad.region.toLowerCase().includes(lowerCaseRegion) : true;
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

        return adsToDisplay.map(ad => (
            <div className="col-md-6 mb-4 pet-card" key={ad.id}>
                <div className="card-body">
                    <img src={ad.image} className="w-75" alt={ad.type} />
                    <p className="text-primary mt-3">id: {ad.id}</p>
                    <p><strong>Вид животного:</strong> {ad.type}</p>
                    <p><strong>Описание:</strong> {ad.description}</p>
                    <p><strong>Номер чипа:</strong> {ad.chipNumber}</p>
                    <p><strong>Район:</strong> {ad.region}</p>
                    <p><strong>Дата:</strong> {ad.date}</p>
                </div>
            </div>
        ));
    };

    const updatePagination = () => {
        const totalPages = Math.ceil(filteredAds.length / itemsPerPage);
        const paginationItems = [];

        for (let i = 1; i <= totalPages; i++) {
            paginationItems.push(
                <li key={i} className={`page-item ${i === currentPage ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => setCurrentPage(i)}>{i}</a>
                </li>
            );
        }

        return paginationItems;
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
                <div className="card-deck">
                    {displayAds()}
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination" id="pagination">
                    {updatePagination()}
                </ul>
            </nav>
        </div>
    );
}

export default Poisk;
