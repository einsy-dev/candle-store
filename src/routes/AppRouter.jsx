import { Routes, Route, Navigate } from 'react-router-dom'
import Shop from '../pages/Shop';
import ShopItem from '../pages/ShopItem';
import { Container } from 'react-bootstrap';

export default function AppRouter() {
    return (
        <Container className="mt-5 d-flex flex-wrap justify-content-center" style={{ minHeight: '50vh' }}>
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/item/:id" element={<ShopItem />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Container>
    );
}
