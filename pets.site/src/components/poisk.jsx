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

        // Если объявлений нет
        if (filteredAds.length === 0) {
            return (
                <div className="text-center mt-4">
                    <p>Объявления не найдены</p>
                </div>
            );
        }

        // Отображение найденных объявлений
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
