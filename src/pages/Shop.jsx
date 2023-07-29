import IsLoading from '../components/shop/IsLoading';
import { useEffect, useState, useContext } from 'react';
import Pagination from '../components/shop/Pagination';
import { observer } from 'mobx-react-lite';
import { getAllCards, getCategory } from '../http/shopAPI';
import { Context } from './../main';
import { NavLink } from 'react-router-dom';

const Shop = observer(() => {

  const { store } = useContext(Context);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAllCards(store.filter, store.page).then(data => store.items(data)).finally(() => setLoading(false)).catch(err => console.log(err));
    getCategory().then(data => store.category = data).catch(err => console.log(err))
  }, [store, store.page])

  return (
    <>
      {isLoading ? <IsLoading className="m-auto" /> :
        <>
          {store.data?.map((el, id) => (

            <div className="card m-3" key={id} style={{ width: "18rem", height: "fit-content" }}>
              <img src={el.image.medium[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card {el.title} Title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <NavLink to={`/item/${el.id}`} state={el} key={id}>Go next</NavLink>
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
