import { Routes, Route, Navigate } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Shop from '../pages/Shop';
import ShopItem from '../pages/ShopItem';
import WishList from './../pages/WishList';
import LogReg from '../pages/LogReg';
import Admin from '../pages/Admin';
import Basket from '../pages/Basket';
import Profile from '../pages/Profile';



const AppRouter = () => {
    return (
        <Container className="d-flex flex-wrap justify-content-center" style={{ "minHeight": "85vh" }}>
            <Routes>
                <Route path="/" element={<Navigate to="/All" />} />
                <Route path="/:category" element={<Shop />} />
                <Route path="/:category/:id" element={<ShopItem />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/basket" element={<Basket />} />
                <Route path='/login?/register?' element={<LogReg />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='profile' element={<Profile />} />
                <Route path="*" element={<Navigate to="/All" />} />
            </Routes>
        </Container>
    );
}

export default AppRouter
