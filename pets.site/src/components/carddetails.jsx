import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Используем useParams для получения параметра из URL

const CardDetails = () => {
  const { id } = useParams(); // Извлекаем id питомца из URL
  const [data, setData] = useState(null); // Состояние для хранения данных питомца
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const [error, setError] = useState(null); // Состояние для ошибок

  useEffect(() => {
    const fetchPetDetails = async () => {
      try {
        const response = await fetch(`https://pets.сделай.site/api/pets/${id}`);
        const result = await response.json();

        if (result.data) {
          setData(result.data); // Сохраняем данные в состояние
        } else {
          throw new Error("Данные не найдены");
        }
        setLoading(false);
      } catch (err) {
        console.error("Ошибка загрузки данных:", err);
        setError("Ошибка загрузки данных");
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]); // Загружаем данные, когда изменяется id

  if (loading) {
    return <div>Загрузка...</div>; // Сообщение о загрузке
  }

  if (error) {
    return <div className="text-danger">{error}</div>; // Сообщение об ошибке
  }

  if (!data) {
    return <div>Питомец не найден</div>; // Сообщение, если питомец не найден
  }

  return (
    <div className="container mt-5">
      <h1>Детали карточки</h1>
      <div className="card border p-4">
        <img
          src={`https://pets.сделай.site/${data.photos}`}
          alt="рисунок животного"
          style={{ maxHeight: "400px", objectFit: "contain", width: "100%" }}
          className="mb-3"
        />
        <p><strong>ID:</strong> {data.id}</p>
        <p><strong>Вид животного:</strong> {data.kind}</p>
        <p><strong>Описание:</strong> {data.description}</p>
        <p><strong>Номер чипа:</strong> {data.mark}</p>
        <p><strong>Район:</strong> {data.district}</p>
        <p><strong>Дата:</strong> {data.date}</p>
        <p><strong>Имя владельца:</strong> {data.name || "Не указано"}</p>
        <p><strong>Телефон владельца:</strong> {data.phone || "Не указан"}</p>
      </div>
    </div>
  );
};

export default CardDetails;
