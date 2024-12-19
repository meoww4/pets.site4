import React, { useState } from 'react';
import AnimalSearchForm from "../components/animalSearchForm";
import AnimalCardsContainer from "../components/foundanimals";
 
const AnimalSearch = () => {
    const [searchParams, setSearchParams] = useState({});
 
    return (
        <div>
            <AnimalSearchForm onSearch={(params) => setSearchParams(params)} />
            {Object.keys(searchParams).length > 0 && (
                <AnimalCardsContainer searchParams={searchParams} />
            )}
        </div>
    );
};
 
export default AnimalSearch;