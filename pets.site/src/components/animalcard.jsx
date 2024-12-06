import React from 'react';

const AnimalCard = (props) => {
    return (
        <div className="col-md-6 mb-4 pet-card">
            <div className="card-body">
                <img src={props.data.image} className="w-75" alt={props.data.type} />
                <p className="text-primary mt-3">id: {props.data.id}</p>
                <p><strong>Вид животного:</strong> {props.data.type}</p>
                <p><strong>Описание:</strong> {props.data.description}</p>
                <p><strong>Номер чипа:</strong> {props.data.mark}</p>
                <p><strong>Район:</strong> {props.data.district}</p>
                <p><strong>Дата:</strong> {props.data.date}</p>
            </div>
        </div>
    );
};

export default AnimalCard;
