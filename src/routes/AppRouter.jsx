import { Routes, Route, Navigate } from 'react-router-dom'
import Shop from '../pages/Shop';
import ShopItem from '../pages/ShopItem';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import { Container } from 'react-bootstrap';

export default function AppRouter() {
    return (
        <Container className="d-flex flex-wrap justify-content-center" style={{ "minHeight": "85vh" }}>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/profile" element={<Profile />} />
                <Route path='/cart' element={<Cart />} />
                <Route path="/item/:id" element={<ShopItem />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    );
}
