import { NavLink } from 'react-router-dom'
import IsLoading from './IsLoading';
import { useEffect, useState } from 'react';
import { dataInfo } from './../data/info';
import Pagination from '../components/Pagination';
import FilterStore from '../store/FilterStore';
import { observer } from 'mobx-react-lite';


const Shop = observer(() => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(JSON.parse(localStorage.getItem('page')) || 1);
  const [limit, setLimit] = useState(5);
  const filter = FilterStore.filter

  useEffect(() => {
    const filteredData = dataInfo.filter(el => el.category === filter || filter === 'All');
    const result = filteredData.slice((page - 1) * 8, page * 8);
    setData(result);
    setLimit(Math.ceil(filteredData.length / 8));
    setLoading(false);
  }, [filter, page])



  if (isLoading) {
    return <IsLoading />;
  } else {
    return (
      <>
        {data.map((el, id) => (
          <div className="card m-3" key={id} style={{ width: "18rem" }}>
            <img src={el.image.medium[0]} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card {el.title} Title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <NavLink to={`/item/${el.id}`} state={el} className="btn btn-outline-primary">
                Go somewhere
              </NavLink>
            </div>
          </div>
        ))}
        <Pagination pageState={(page) => setPage(page)} limitPage={limit} activePage={page} />
      </>
    );
  }

})
export default Shop;