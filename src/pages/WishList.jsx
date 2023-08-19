import IsLoading from '../components/shop/IsLoading';
import { useEffect, useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from './../main';
import Card from '../components/shop/Card';
import { getWishList } from '../http/userAPI';
import { Link } from 'react-router-dom';

const Wishlist = observer(() => {
    const [data, setData] = useState();
    const { store, user } = useContext(Context);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        store.page = 1
    }, [store])

    useEffect(() => {
        setLoading(true);
        if (user.isAuth) {
            getWishList().then(({ data }) => setData(data)).finally(() => setLoading(false)).catch(err => console.log(err));
        }
        else {
            setLoading(false)
            setData(user.wishlist)
        }
    }, [store.page, store])


    return (
        <>
            <nav aria-label="breadcrumb" className="w-100 mt-4" style={{ height: "fit-content" }}>
                <ol className="breadcrumb m-auto">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
                </ol>
            </nav>

            <div className='w-100 h-100 d-flex flex-wrap justify-content-center' style={{ "minHeight": "80vh" }}>
                {isLoading ? <IsLoading className="m-auto" /> :
                    <>
                        {data.map((el, id) => <Card item={el} key={id} />)}
                    </>
                }
            </div>
        </>
    );
}
)

export default Wishlist;
