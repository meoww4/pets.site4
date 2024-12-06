import Кошка from '../image/pets/кошка.jpg'
import Коза from '../image/pets/коза.jpeg'


function Cart1() {
    return ( 
        <div>
            <div className="d-flex flex-row flex-wrap">

                <div id="post1" className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '45%'}}>
                    <img src={Кошка} className="d-block mx-auto" style={{height: 400}} alt="рисунок животного" />
                    <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
                    <p className="w-50" style={{minWidth: 250}}>14</p>
                    <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
                    <p className="w-50" style={{minWidth: 250}}> Кошка</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
                    <p className="w-50" style={{minWidth: 300}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
                    <p className="w-50" style={{minWidth: 300}}>ca-001-spb</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
                    <p className="w-50" style={{minWidth: 300}}>Василеостровский</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
                    <p className="w-50" style={{minWidth: 300}}>24-03-2020</p>
                </div>
            
                <div id="post2" className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '45%'}}>
                    <img src={Коза} className="d-block mx-auto" style={{height: 400}} alt="рисунок животного" />
                    <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
                    <p className="w-50" style={{minWidth: 250}}>18</p>
                    <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
                    <p className="w-50" style={{minWidth: 250}}> Коза</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
                    <p className="w-50" style={{minWidth: 300}}>Потерялась коза, последний раз видели в здании Московского вокзала
                    г. Санкт-Петербург. Коза белая, пуховая.</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
                    <p className="w-50" style={{minWidth: 300}}>go-011-spb</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
                    <p className="w-50" style={{minWidth: 300}}>Центральный</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
                    <p className="w-50" style={{minWidth: 300}}>14-03-2022</p>
                </div>
            </div>
        </div>
       

     );
}

export default Cart1;