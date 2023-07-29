import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Shop from '../pages/Shop';
import ShopItem from '../pages/ShopItem';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import WishList from './../pages/WishList';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../main';
import Admin from './../pages/Admin';

const AppRouter = observer(() => {
    const { user } = useContext(Context)
    return (
        <Container className="d-flex flex-wrap justify-content-center" style={{ "minHeight": "85vh" }}>
            <Routes>
                {user.role === "ADMIN" && <Route path="/admin" element={<Admin />} />}
                <Route path="/" element={<Shop />} />
                <Route path="/item/:id" element={<ShopItem />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    );
}
)

export default AppRouter
