import Корги from '../image/pets/корги.jpg'
import Хомяк from '../image/pets/хомяк.jpg'

function Cart2() {
    return ( 
        <div>
            <div className="d-flex flex-row flex-wrap">
                    <div id="post3" className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '45%'}}>
                    <img src={Корги} className="d-block mx-auto" style={{height: 400}} alt="рисунок животного" />
                    <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
                    <p className="w-50" style={{minWidth: 250}}>17</p>
                    <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
                    <p className="w-50" style={{minWidth: 250}}>Собака</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
                    <p className="w-50" style={{minWidth: 300}}>Потерялась собака породы корги, очень любит бегать, игривая.</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
                    <p className="w-50" style={{minWidth: 300}}>do-111-spb</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
                    <p className="w-50" style={{minWidth: 300}}>Приморский</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
                    <p className="w-50" style={{minWidth: 300}}>24-11-2024</p>
                </div>

                <div id="post4" className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '45%'}}>
                    <img src={Хомяк} className="d-block mx-auto" style={{height: 400}} alt="рисунок животного" />
                    <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
                    <p className="w-50" style={{minWidth: 250}}>19</p>
                    <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
                    <p className="w-50" style={{minWidth: 250}}>Хомяк</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
                    <p className="w-50" style={{minWidth: 300}}>Потерялся рыжий хомяк, очень маленький.</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
                    <p className="w-50" style={{minWidth: 300}}>ha-221-spb</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
                    <p className="w-50" style={{minWidth: 300}}>Колпинский</p>
                    <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
                    <p className="w-50" style={{minWidth: 300}}>22-02-2023</p>
                </div>
        </div>
        </div>
     );
}

export default Cart2;