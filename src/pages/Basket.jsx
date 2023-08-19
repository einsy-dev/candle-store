import IsLoading from '../components/shop/IsLoading';
import { useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../main';
import { getBasket } from '../http/userAPI';
import { Link } from 'react-router-dom';
import Order from '../components/modal/Order';
import CardS from '../components/shop/CardS';

const Basket = observer(() => {
    const { user } = useContext(Context);
    const [data, setData] = useState();
    const [total, setTotal] = useState(0);
    const [isLoading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        getBasket()
            .then(({ data }) => { setData(data) })
            .finally(() => setLoading(false))
            .catch(err => console.log(err));
    }, [])

    useEffect(() => {
        const totalPrice = data?.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.price * user.basket[currentValue._id])
        }, 0);
        setTotal(totalPrice)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Object.keys(user.basket).map((el) => user.basket[el])])

    return (
        <>
            <nav aria-label="breadcrumb" className="w-100 mt-4" style={{ height: "fit-content" }}>
                <ol className="breadcrumb m-auto">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Basket</li>
                </ol>
            </nav>

            <d className='w-100 h-100' style={{ "minHeight": "70vh" }}>
                {isLoading ? <IsLoading /> :
                    <>
                        {data?.map((item, index) =>
                            <CardS item={item} key={index} totalPrice={setTotal} />
                        )}
                    </>
                }
            </d>

            <div className="w-100 bg-light border rounded p-2 mb-3 d-flex justify-content-end">
                <div className="mx-4 my-auto">Всего: {total} ₽</div>
                {data && <a data-bs-toggle="modal" data-bs-target="#order" className='btn btn-primary my-auto'>Офрмить заказ</a>}

                <Order />

            </div>

        </>
    );
}
)

export default Basket;
