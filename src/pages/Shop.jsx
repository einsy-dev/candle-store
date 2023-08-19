import IsLoading from '../components/shop/IsLoading';
import { useEffect, useState, useContext } from 'react';
import Pagination from '../components/shop/Pagination';
import { observer } from 'mobx-react-lite';
import { getAllCards } from '../http/shopAPI';
import { Context } from './../main';
import Card from '../components/shop/Card';
import { useParams } from 'react-router';


const Shop = observer(() => {
  const [data, setData] = useState();
  const { store } = useContext(Context);
  const [isLoading, setLoading] = useState(true);
  const { category } = useParams()


  useEffect(() => {
    setLoading(true);
    getAllCards(category, store.page).then(({ data, limitPage }) => { setData(data), store.limitPage = limitPage }).finally(() => setLoading(false)).catch(err => console.log(err));
  }, [store.page, store, category])


  return (
    <>
      {isLoading ? <IsLoading className="m-auto" /> :
        <>
          {data?.map((el, id) => <Card item={el} key={id} />)}
          <Pagination limitPage={store.limitPage} activePage={store.page} />
        </>
      }
    </>
  );
}
)

export default Shop;
