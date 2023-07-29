import { useEffect, useState, useContext } from "react";
import { Context } from './../../main';
import { observer } from 'mobx-react-lite';


const Pagination = observer(({ limitPage, activePage }) => {

  const { store } = useContext(Context);
  const [result, setResult] = useState([]);
  const pages = Array.from({ length: limitPage }, (_, i) => i + 1);

  const handleClick = (i) => {
    store.page = i;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    if (limitPage <= 5) {
      setResult(pages.slice(0, limitPage));
    } else if (activePage <= 2) {
      setResult(pages.slice(0, 5));
    } else if (activePage >= limitPage - 2) {
      setResult(pages.slice(limitPage - 5, limitPage));
    } else {
      setResult(pages.slice(activePage - 3, activePage + 2));
    }
  }, [activePage, limitPage]);

  return (
    <div className="mt-auto w-100 d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className={activePage === 1 ? "page-link disabled" : "page-link"} onClick={() => handleClick(activePage - 1)}>
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {result?.map((el, id) => (
            <li className="page-item" key={id}>
              <button className={activePage === el ? "page-link active" : "page-link"} onClick={() => handleClick(el)}>
                {el}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className={activePage === limitPage ? "page-link disabled" : "page-link"} onClick={() => handleClick(activePage + 1)}>
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
);

export default Pagination;