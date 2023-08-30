import { Container } from 'react-bootstrap';
import { ReactComponent as CartIcon } from '../../images/bag.svg'
import { ReactComponent as WishListIcon } from '../../images/heart.svg'
import { basket, wishList } from '../../http/userAPI';
import { useContext, useState } from 'react';
import { Context } from './../../main';

export default function DescriptionItem({ id, title, price, description, specs }) {
  const { user } = useContext(Context)
  const [inwishlist, setInwishlist] = useState(user.isAuth && user.wishlist.includes(id))
  const [inbasket, setInbasket] = useState(user.isAuth && id in user.basket)

  function addToWishlist(id) {
    if (user.wishlist.includes(id)) {
      user.wishlist.splice(user.wishlist.indexOf(id), 1);
    }
    else {
      user.wishlist ? user.wishlist.push(id) : user.wishlist = [id];
    }
    wishList(user.wishlist).then(() => setInwishlist(user.wishlist.includes(id)))
  }

  function addToBasket(id) {
    if (user.basket.includes(id)) {
      user.basket.splice(user.basket.indexOf(id), 1);
    }
    else {
      user.basket ? user.basket.push(id) : user.basket = [id];
    }
    basket(user.basket).then(() => setInbasket(user.basket.includes(id)))
  }

  return (
    <Container className='mt-4'>
      <div className="d-flex flex-wrap">
        <div className='fs-2 px-4 p-0 me-auto m-auto p-2' style={{ whiteSpace: 'nowrap' }}>{title}</div>

        <div className='fs-4 d-flex align-items-center justify-content-end  m-auto p-2 bg-light border rounded' style={{ whiteSpace: 'nowrap', width: 'fit-content' }}> от {price} руб.</div>
        {user.isAuth && <>
          <div className='d-flex align-items-center justify-content-end  m-auto p-2' style={{ whiteSpace: 'nowrap', width: 'fit-content' }}>
            <WishListIcon width={32} height={32} fill={inwishlist ? 'red' : 'black'} onClick={() => wishList(id).then(() => addToWishlist(id))} style={{ cursor: 'pointer' }} className="p-0 me-4" />
            <CartIcon width={32} height={32} fill={inbasket ? 'red' : 'black'} onClick={() => basket(id).then(() => addToBasket(id))} style={{ cursor: 'pointer' }} className="p-0" />
          </div>
        </>
        }

      </div>

      <div id="accordion">
        <div className="card my-4">
          <button className="btn bg-light" data-bs-toggle="collapse" href="#collapseOne">
            Описание
          </button>
          <div id="collapseOne" className="collapse show" data-parent="#accordion">
            <div className="card-body">
              {description}
            </div>
          </div>
        </div>
        <div className="card">
          <button className="btn bg-light" data-bs-toggle="collapse" href="#collapseO">
            Характеристики
          </button>
          <div id="collapseO" className="collapse" data-parent="#accordion">
            <div className="card-body">
              <ul className='list-group list-group-flush'>
                {Object.keys(specs).map((el, id) => (
                  <li className='list-group-item' key={id}>
                    {el}  :  {specs[el]}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
