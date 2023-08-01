import IsLoading from '../components/shop/IsLoading';
import { useEffect, useState, useContext } from 'react';
import Pagination from '../components/shop/Pagination';
import { observer } from 'mobx-react-lite';
import { getAllCards } from '../http/shopAPI';
import { Context } from './../main';
import { NavLink } from 'react-router-dom';


const Shop = observer(() => {
  const [data, setData] = useState();
  const { store } = useContext(Context);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllCards(store.filter, store.page).then(({ data, limitPage }) => { setData(data), store.limitPage = limitPage }).finally(() => setLoading(false)).catch(err => console.log(err));
  }, [store.page, store])

  return (
    <>
      {isLoading ? <IsLoading className="m-auto" /> :
        <>
          {data.map((el, id) => (

            <div className="card m-3 " key={id} style={{ width: "18rem", height: "fit-content" }}>
              <img src={import.meta.env.VITE_REACT_APP_URL_API + '/images/' + el.images} className="card-img-top ratio ratio-16x9" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.title}</h5>
                <p className="card-text">
                  {el.description}
                </p>

                <NavLink to={`/item/${el.id}`}>Перейти на страницу товара</NavLink>

              </div>

            </div>

          ))}

          <Pagination limitPage={store.limitPage} activePage={store.page} />

        </>
      }
    </>
  );
}
)

export default Shop;
