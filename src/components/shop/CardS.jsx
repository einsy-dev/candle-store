import { useContext, useState } from 'react'
import { ReactComponent as CartIcon } from '../../images/bag.svg'
import { ReactComponent as WishListIcon } from '../../images/heart.svg'
import { Context } from '../../main'
import { wishList, basket } from '../../http/userAPI'
import { observer } from 'mobx-react-lite'


const CardS = observer(({ item }) => {
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
        basket(user.basket)
            .then(() => setInbasket(item._id in user.basket))
            .finally(() => location.reload())
            .catch((err) => console.log(err))
    }

    return (
        <div className="mb-4 d-flex flex-wrap h-100 w-100 justify-content-center rounded bg-light p-2 border">
            <div className="d-flex flex-wrap me-lg-auto">
                <img src={import.meta.env.VITE_REACT_APP_URL_API + '/images/' + item.images[0]} className='ratio ratio-16x9 m-auto m-md-0 rounded' style={{ height: "8rem", width: 'fit-content' }} alt="" />
                <div className="mx-auto p-2 fs-5 text-center" >{item.title}</div>
            </div>

            <div className="d-flex flex-lg-column flex-wrap">
                <div className="m-auto p-2">
                    <div className="btn btn-light border fs-5">{(item.price * user.basket[item._id]) || 0} ₽</div>
                    <WishListIcon width={30} height={30} fill={inwishlist ? 'red' : 'black'} onClick={() => addToWishlist(item._id)} style={{ cursor: 'pointer' }} className="mx-4" />
                    <CartIcon width={30} height={30} fill={inbasket ? 'red' : 'black'} onClick={() => addToBasket(item._id)} style={{ cursor: 'pointer' }} />
                </div>
                <div className="m-auto p-2">
                    <button onClick={() => user.basket[item._id] -= 1} className={`btn btn-primary ${user.basket[item._id] < 2 && 'disabled'}`}>-</button>
                    <div className="mx-3 btn btn-light border" style={{ minWidth: '3rem' }}>{(user.basket[item._id]) || 0}</div>
                    <button onClick={() => user.basket[item._id] += 1} className={`btn btn-primary ${user.basket[item._id] >= 99 && 'disabled'}`}>+</button>
                </div>
            </div>
        </div >
    )
}
)

export default CardS;