import React, { useEffect, useState } from "react";
import Slider from "../components/slider";
import Card from "../components/card"; // Убедитесь, что путь корректный
import Two from "../components/Two";
import Three from "../components/Three";

const Main = () => {
  const [pet, setPet] = useState([]); // Правильная форма useState

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    fetch("https://pets.сделай.site/api/pets")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setPet(result.data.orders); // Корректное обновление состояния
      });
  };

  return (
    <div>
      <Slider />
      <div>
        <Two />
      </div>
      <div className="container mt-4">
        <div className="row">
          {pet.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
      <Three />
    </div>
  );
};

export default Main;
