import { ReactComponent as CartIcon } from '../../images/bag.svg'
import { ReactComponent as WishListIcon } from '../../images/heart.svg'
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { basket, wishList } from '../../http/userAPI';
import { Context } from './../../main';
import { useContext, useState } from 'react';

const Card = observer(({ item }) => {
    const { user } = useContext(Context)
    const [inwishlist, setInwishlist] = useState(user.isAuth && user.wishlist.includes(item._id))
    const [inbasket, setInbasket] = useState(user.isAuth && item._id in user.basket)


    function addToWishlist(id) {
        if (user.wishlist.includes(item._id)) {
            user.wishlist.splice(user.wishlist.indexOf(item._id), 1);
        }
        else {
            user.wishlist ? user.wishlist.push(id) : user.wishlist = [id];
        }

        if (user.isAuth) {
            wishList(user.wishlist).then(() => setInwishlist(user.wishlist.includes(item._id)))
        }
        else {
            setInwishlist(user.wishlist.includes(item._id))
        }
    }

    function addToBasket(id, value) {
        if (!value) value = 1
        if (id in user.basket) delete user.basket[id]
        else {
            user.basket[id] = value;
        }
        basket(user.basket).then(() => setInbasket(item._id in user.basket))
    }

    return (
        <div className="card m-3" style={{ width: "18rem", height: "fit-content" }}>

            <NavLink to={`/store/${item._id}`} className=" link-underline link-underline-opacity-0 link-dark">
                <img src={import.meta.env.VITE_REACT_APP_URL_API + '/images/' + item.images[0]} className="card-img-top ratio ratio-16x9" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                        {item.description.substring(0, 50)} .  .  .
                    </p>
                </div>
            </NavLink>

            <div className="d-flex w-100 justify-content-center align-items-center mb-3 px-3">
                <div className="bg-light border rounded fs-5 px-3 py-1 me-auto">{item.price} ₽</div>
                <WishListIcon width={30} height={30} fill={inwishlist ? 'red' : 'black'} onClick={() => addToWishlist(item._id)} style={{ cursor: 'pointer' }} className="mx-4" />
                <CartIcon width={30} height={30} fill={inbasket ? 'red' : 'black'} onClick={() => addToBasket(item._id)} style={{ cursor: 'pointer' }} />
            </div>
        </div>
    )
}
)

export default Card;