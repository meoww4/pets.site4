import React, { createContext, useState, useContext } from 'react';

const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);

  const addPet = (newPet) => {
    setPets((prevPets) => [newPet, ...prevPets]);
  };

  return (
    <PetContext.Provider value={{ pets, addPet }}>
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
