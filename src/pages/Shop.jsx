import IsLoading from './IsLoading';
import Card from '../components/Card';
import { useEffect, useState } from 'react';
import { dataInfo } from './../data/info';
import Pagination from '../components/Pagination';
import FilterStore from '../store/FilterStore';
import { observer } from 'mobx-react-lite';
import { Container } from 'react-bootstrap';

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

  return (
    <Container className="d-flex flex-wrap justify-content-center" style={{ minHeight: '80vh' }}>
      {isLoading ? <IsLoading className="m-auto" /> :
        <>
          <Card data={data} />
          <Pagination pageState={(page) => setPage(page)} limitPage={limit} activePage={page} />
        </>
      }
    </Container>
  );
}
)

export default Shop;
